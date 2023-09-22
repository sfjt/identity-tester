import express from "express"

import config from "../config"

const { AUTH0_DOMAIN } = config.global
const { CLIENT_ID, SCOPE } = config.spa
const { API_IDENTIFIER } = config.api

const spaRouter = express.Router()

spaRouter.get("/", (req, res, next) => {
  res.render("./spaindex.ejs")
})

spaRouter.get("/auth0spajs", (req, res, next) => {
  res.render("./auth0spajs.ejs")
})

spaRouter.get("/auth0js", (req, res, next) => {
  res.render("./auth0js.ejs")
})

spaRouter.get("/lock", (req, res, next) => {
  res.render("./lock.ejs")
})

spaRouter.get("/config", (req, res, next) => {
  res.json({
    AUTH0_DOMAIN,
    CLIENT_ID,
    SCOPE,
    API_IDENTIFIER,
  })
})

export default spaRouter
