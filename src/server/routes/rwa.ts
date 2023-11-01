import express from "express"
import { auth } from "express-openid-connect"

import config from "../config"
import {
  verifyProfilingSessionToken,
  signProfilingSessionToken,
} from "../middlewares/profilingSessionToken"
import errorHandler from "../middlewares/errorHandler"

const rwaRouter = express.Router()
const PROFILING_CONNECTION_NAME = "profiling"

const { HOSTNAME, PORT } = config.global
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
    auth0Domain: AUTH0_DOMAIN,
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

rwaRouter.get(
  "/profiling/input",
  verifyProfilingSessionToken(),
  async (req, res, next) => {
    res.render("./profiling.ejs", {
      sessionToken: res.locals["session_token"], // Just to inspect session_token. It's not required.
      state: res.locals["state"],
      sub: res.locals["sub"],
    })
  },
)

rwaRouter.post(
  "/profiling/redirect",
  signProfilingSessionToken(baseURL),
  async (req, res, next) => {
    const token = res.locals["new_session_token"]
    const state = res.locals["state"]
    console.log("New Session Token:", token)
    const continueURL = `${rwaConfig.issuerBaseURL}/continue?state=${state}`
    res.render("./profilingRedirect.ejs", {
      continueURL,
      token,
    })
  },
)

rwaRouter.use(errorHandler)

export default rwaRouter
