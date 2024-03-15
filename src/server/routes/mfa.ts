import express from "express"
import { auth, ConfigParams, requiresAuth } from "express-openid-connect"
import axios from "axios"

import config from "../config"
import { checkExpiredToken } from "../middlewares/checkExpiredToken"
import errorHandler from "../middlewares/errorHandler"

const mfaSettingsRouter = express.Router()

const { ISSUER_BASE_URL } = config.global
const { CLIENT_ID, CLIENT_SECRET, SECRET, SCOPE, BASE_URL, AUDIENCE } =
  config.mfaSettings
const authConfig: ConfigParams = {
  authRequired: false,
  auth0Logout: true,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  secret: SECRET,
  baseURL: BASE_URL,
  issuerBaseURL: ISSUER_BASE_URL,
  authorizationParams: {
    response_type: "code",
    scope: SCOPE,
    audience: AUDIENCE,
  },
  routes: {
    postLogoutRedirect: BASE_URL.replace("/mfa", ""),
  },
}

const logoutURL = `${BASE_URL}/logout`

mfaSettingsRouter.use(auth(authConfig))

mfaSettingsRouter.get(
  "/",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    console.log("accessToken:", accessToken?.access_token)
    let authenticators: any[] = new Array()
    try {
      const resp = await axios.get(`${AUDIENCE}authenticators`, {
        headers: {
          Authorization: `Bearer ${accessToken?.access_token}`,
        },
      })
      authenticators = resp.data
    } catch (err) {
      next(err)
    }
    res.render("./mfa.ejs", {
      issuerBaseURL: ISSUER_BASE_URL,
      authenticators,
    })
  },
)

mfaSettingsRouter.delete(
  "/delete/:authenticator_id",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    const authenticatorID = req.params["authenticator_id"]
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
      },
    }
    console.log("authenticatorID", authenticatorID)
    axios
      .delete(`${AUDIENCE}authenticators/${authenticatorID}`, headers)
      .then((resp) => {
        console.log("Deleted an authenticator", authenticatorID, resp.status)
        res.sendStatus(resp.status)
      })
      .catch((err) => {
        console.log("Could not delete an authenticator", authenticatorID, err)
        res.sendStatus(500)
      })
  },
)

mfaSettingsRouter.get(
  "/email",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    const email = req.oidc.user?.email
    if (!email) {
      next("Email required")
    }
    let oobCode = ""
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
        "Content-Type": "application/json",
      },
    }
    const payload = {
      authenticator_types: ["oob"],
      oob_channels: ["email"],
      email,
    }
    try {
      const resp = await axios.post(`${AUDIENCE}associate`, payload, headers)
      oobCode = resp.data["oob_code"] || ""
    } catch (err) {
      next(err)
    }
    res.render("./mfaEmail.ejs", {
      verificationResult: false,
      oobCode,
      email,
    })
  },
)

mfaSettingsRouter.post(
  "/email/verify",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    const email = req.oidc.user?.email
    const oobCode = req.body["oob_code"] || ""
    const bindingCode = req.body["binding_code"] || ""
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const payload = {
      grant_type: "http://auth0.com/oauth/grant-type/mfa-oob",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      mfa_token: accessToken?.access_token || "",
      oob_code: oobCode,
      binding_code: bindingCode,
    }
    try {
      const resp = await axios.post(
        `${ISSUER_BASE_URL}/oauth/token`,
        payload,
        headers,
      )
      if (!resp.data["access_token"]) {
        console.error(resp.status)
        throw new Error("Invalid code")
      }
    } catch (err) {
      console.error(err)
      res.render("./mfaEmail.ejs", {
        verificationResult: false,
        oobCode,
        email,
      })
      return
    }
    res.render("./mfaEmail.ejs", {
      verificationResult: true,
      oobCode: "",
      email,
    })
  },
)

mfaSettingsRouter.get(
  "/totp",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    let secret = ""
    let barcodeURI = ""
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
        "Content-Type": "application/json",
      },
    }
    const payload = {
      authenticator_types: ["otp"],
    }
    try {
      const resp = await axios.post(`${AUDIENCE}associate`, payload, headers)
      secret = resp.data["secret"] || ""
      barcodeURI = resp.data["barcode_uri"] || ""
    } catch (err) {
      next(err)
    }
    res.render("./mfaTotp.ejs", {
      verificationResult: false,
      secret,
      barcodeURI,
    })
  },
)

mfaSettingsRouter.post(
  "/totp/verify",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    const otp = req.body["otp"] || ""
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const payload = {
      grant_type: "http://auth0.com/oauth/grant-type/mfa-otp",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      mfa_token: accessToken?.access_token || "",
      otp,
    }
    try {
      const resp = await axios.post(
        `${ISSUER_BASE_URL}/oauth/token`,
        payload,
        headers,
      )
      if (!resp.data["access_token"]) {
        console.error(resp.status)
        throw new Error("Invalid TOTP")
      }
    } catch (err) {
      console.error(err)
      const secret = req.body["secret"] || ""
      const barcodeURI = req.body["barcode_uri"] || ""
      res.render("./mfaTotp.ejs", {
        verificationResult: false,
        secret,
        barcodeURI,
      })
      return
    }
    res.render("./mfaTotp.ejs", {
      verificationResult: true,
      secret: "",
      barcodeURI: "",
    })
  },
)

mfaSettingsRouter.get(
  "/sms",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    res.render("./mfaSMSEnrollment.ejs")
  },
)

mfaSettingsRouter.post(
  "/sms/enroll",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const phoneNumber = req.body["phone_number"] || ""
    const { accessToken } = req.oidc
    const headers = {
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
        "Content-Type": "application/json",
      },
    }
    const payload = {
      authenticator_types: ["oob"],
      oob_channels: ["sms"],
      phone_number: phoneNumber,
    }
    let oobCode = ""
    try {
      const resp = await axios.post(`${AUDIENCE}associate`, payload, headers)
      oobCode = resp.data["oob_code"] || ""
    } catch (err) {
      next(err)
    }
    res.render("./mfaSMSVerification.ejs", {
      verificationResult: false,
      oobCode,
      phoneNumber,
    })
  },
)

mfaSettingsRouter.post(
  "/sms/verify",
  requiresAuth(),
  checkExpiredToken(logoutURL),
  async (req, res, next) => {
    const { accessToken } = req.oidc
    const oobCode = req.body["oob_code"] || ""
    const bindingCode = req.body["binding_code"] || ""
    const phoneNumber = req.body["phone_number"] || ""
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const payload = {
      grant_type: "http://auth0.com/oauth/grant-type/mfa-oob",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      mfa_token: accessToken?.access_token || "",
      oob_code: oobCode,
      binding_code: bindingCode,
    }
    try {
      const resp = await axios.post(
        `${ISSUER_BASE_URL}/oauth/token`,
        payload,
        headers,
      )
      if (!resp.data["access_token"]) {
        console.error(resp.status)
        throw new Error("Invalid code")
      }
    } catch (err) {
      console.error(err)
      res.render("./mfaSMSVerification.ejs", {
        verificationResult: false,
        oobCode,
        phoneNumber,
      })
      return
    }
    res.render("./mfaSMSVerification.ejs", {
      verificationResult: true,
      oobCode: "",
      phoneNumber,
    })
  },
)

mfaSettingsRouter.use(errorHandler)

export default mfaSettingsRouter
