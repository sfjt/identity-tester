import express from "express"
import { expressjwt } from "express-jwt"
import { expressJwtSecret, GetVerificationKey } from "jwks-rsa"

import config from "../config"

const apiRouter = express.Router()

const { HOSTNAME, PORT, AUTH0_DOMAIN } = config.global
const { API_IDENTIFIER } = config.api
let origin = ""
if (process.env.NODE_ENV === "dev") {
  origin = `http://${HOSTNAME}:${PORT}`
}
if (process.env.NODE_ENV === "prod") {
  origin = `https://${HOSTNAME}`
}

const secret = expressJwtSecret({
  cache: false,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
}) as GetVerificationKey
const checkJwt = expressjwt({
  secret,
  audience: API_IDENTIFIER,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
})

apiRouter.get("/", async (req, res) => {
  res.sendStatus(200)
})

apiRouter.get("/authtest", checkJwt, (req, res, next) => {
  res.json({
    status: 200,
    message: "You are authorized.",
  })
})

export default apiRouter
