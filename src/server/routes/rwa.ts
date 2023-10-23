import express from "express"
import { auth } from "express-openid-connect"
import * as jose from "jose"
import axios from "axios"

import config from "../config"

const rwaRouter = express.Router()
const PROFILING_CONNECTION_NAME = "profiling"

const { HOSTNAME, PORT, PROFILING_SESSION_SECRET } = config.global
const ENCODED_SESSION_SECRET = new TextEncoder().encode(
  PROFILING_SESSION_SECRET,
)
let baseURL = ""
if (process.env.NODE_ENV === "dev") {
  baseURL = `http://${HOSTNAME}:${PORT}/rwa`
}
if (process.env.NODE_ENV === "devhttps") {
  baseURL = `https://${HOSTNAME}:${PORT}/rwa`
}
if (process.env.NODE_ENV === "prod") {
  baseURL = `https://${HOSTNAME}/rwa`
}

const { AUTH0_DOMAIN } = config.global
const { CLIENT_ID, CLIENT_SECRET, SECRET, SCOPE } = config.rwa
const { API_IDENTIFIER } = config.api
const rwaConfig = {
  authRequired: false,
  auth0Logout: true,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  secret: SECRET,
  baseURL,
  issuerBaseURL: `https://${AUTH0_DOMAIN}`,
  authorizationParams: {
    response_type: "code",
    scope: SCOPE,
    audience: API_IDENTIFIER,
  },
}

rwaRouter.use(auth(rwaConfig))

rwaRouter.get("/", (req, res, next) => {
  res.render("./rwa.ejs", {
    isAuthenticated: req.oidc.isAuthenticated(),
    idToken: req.oidc.idToken,
    accessToken: req.oidc.accessToken?.access_token,
    profilingConnectionName: PROFILING_CONNECTION_NAME,
  })
})

rwaRouter.get("/login/custom", (req, res, next) => {
  console.log("logging in with custom params", req.query)
  res.oidc.login({
    returnTo: baseURL,
    authorizationParams: {
      ...req.query,
    },
  })
})

rwaRouter.get("/login/profiling", (req, res, next) => {
  res.oidc.login({
    returnTo: baseURL,
    authorizationParams: {
      connection: PROFILING_CONNECTION_NAME,
    },
  })
})

rwaRouter.get("/profiling/input", async (req, res, next) => {
  const session_token = req.query["session_token"] as string
  const state = req.query["state"] || ""
  let sub = ""
  try {
    const { payload } = await jose.jwtVerify(
      session_token,
      ENCODED_SESSION_SECRET,
    )
    sub = payload.sub || ""
  } catch (err) {
    console.error(err)
    res.sendStatus(400)
    return
  }
  res.render("./profiling.ejs", {
    sessionToken: session_token, // Just to inspect session_token. It's not required.
    state,
    sub,
  })

  rwaRouter.post("/profiling/redirect", async (req, res, next) => {
    const sub = req.body["sub"]
    const state = req.body["state"]
    const testClaim = req.body["testClaim"]
    const payload = {
      sub,
      state,
      testClaim,
    }
    const header = {
      alg: "HS256",
      typ: "JWT",
    }
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader(header)
      .setIssuedAt()
      .setIssuer(baseURL)
      .setExpirationTime("2h")
      .sign(ENCODED_SESSION_SECRET)
    console.log("JWT:", token)
    const continueURL = `${rwaConfig.issuerBaseURL}/continue?state=${state}`
    res.render("./profilingRedirect.ejs", {
      continueURL,
      token,
    })
  })
})

export default rwaRouter
