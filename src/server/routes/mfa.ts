import express from "express"
import { auth, ConfigParams, requiresAuth } from "express-openid-connect"
import axios from "axios"

import config from "../config"

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

mfaSettingsRouter.use(auth(authConfig))

mfaSettingsRouter.get("/", requiresAuth(), async (req, res, next) => {
  const { accessToken } = req.oidc
  if (accessToken?.isExpired()) {
    res.render("./expiredToken.ejs", {
      accessToken,
      loginURL: BASE_URL,
    })
  }
  console.log("accessToken:", accessToken?.access_token)
  let authenticators = {}
  try {
    const resp = await axios.get(`${AUDIENCE}authenticators`, {
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
      },
    })
    authenticators = resp.data
    console.log(authenticators)
  } catch (err) {
    next(err)
  }
  res.render("./mfa.ejs", {
    issuerBaseURL: ISSUER_BASE_URL,
    authenticators,
  })
})

export default mfaSettingsRouter
