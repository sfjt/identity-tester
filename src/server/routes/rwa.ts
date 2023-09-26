import express from "express"
import { auth } from "express-openid-connect"

import config from "../config"

const rwaRouter = express.Router()

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
  })
})

rwaRouter.get("/login/custom", (req, res, next) => {
  console.log("logging in with custom params", req.query)
  res.oidc.login({
    authorizationParams: {
      ...req.query,
    },
  })
})

export default rwaRouter
