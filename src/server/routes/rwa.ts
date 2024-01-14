import express from "express"
import { auth, ConfigParams } from "express-openid-connect"

import config from "../config"
import {
  verifyProfilingSessionToken,
  signProfilingSessionToken,
} from "../middlewares/profilingSessionToken"
import errorHandler from "../middlewares/errorHandler"

const rwaRouter = express.Router()
const PROFILING_CONNECTION_NAME = "profiling"

const { ISSUER_BASE_URL } = config.global
const { CLIENT_ID, CLIENT_SECRET, SECRET, SCOPE, BASE_URL } = config.rwa
const { API_IDENTIFIER } = config.api
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
    audience: API_IDENTIFIER,
  },
}

rwaRouter.use(auth(authConfig))

rwaRouter.get("/", (req, res, next) => {
  res.render("./rwa.ejs", {
    isAuthenticated: req.oidc.isAuthenticated(),
    idToken: req.oidc.idToken,
    accessToken: req.oidc.accessToken?.access_token,
    profilingConnectionName: PROFILING_CONNECTION_NAME,
    issuerBaseURL: ISSUER_BASE_URL,
  })
})

rwaRouter.get("/login/custom", (req, res, next) => {
  console.log("logging in with custom params", req.query)

  // "Multi Tenancy Model" organization.
  const orgId = req.query["organization"]?.toString() || ""
  const orgName = req.query["organization_name"]?.toString() || ""
  console.log("Organization: ", orgId, orgName)
  if (orgName) {
    const baseUrl = new URL(BASE_URL)
    const domainName = baseUrl.host.split(".")
    domainName.unshift(orgName)
    const host = domainName.join(".")
    const redirect_uri = `https://${host}/callback`
    console.log("redirect_uri", redirect_uri)
    res.oidc.login({
      authorizationParams: {
        ...req.query,
        redirect_uri,
      },
    })
    return
  }
  res.oidc.login({
    returnTo: BASE_URL,
    authorizationParams: {
      ...req.query,
    },
  })
})

rwaRouter.get("/login/invitation", (req, res, next) => {
  console.log("logging in with custom params", req.query)
  res.oidc.login({
    returnTo: BASE_URL,
    authorizationParams: {
      ...req.query,
    },
  })
})

rwaRouter.get("/logout/custom", (req, res, next) => {
  console.log("logging out in with custom params", req.query)
  const returnTo = req.query["returnTo"]?.toString()
  const logoutParams = {
    ...req.query
  }
  delete logoutParams["returnTo"]
  res.oidc.logout({
    returnTo,
    logoutParams
  })
})

rwaRouter.get("/login/profiling", (req, res, next) => {
  res.oidc.login({
    returnTo: BASE_URL,
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
  signProfilingSessionToken(BASE_URL),
  async (req, res, next) => {
    const token = res.locals["new_session_token"]
    const state = res.locals["state"]
    console.log("New Session Token:", token)
    const continueURL = `${ISSUER_BASE_URL}/continue?state=${state}`
    res.render("./profilingRedirect.ejs", {
      continueURL,
      token,
    })
  },
)

rwaRouter.use(errorHandler)

export default rwaRouter
