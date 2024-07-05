import express from "express"
import { auth, ConfigParams } from "express-openid-connect"
import { createClient, RedisClientOptions } from "redis"
import RedisStore from "connect-redis"
import { OpenFgaClient, CredentialsMethod } from "@openfga/sdk"

import config from "../config"
import {
  verifyProfilingSessionToken,
  signProfilingSessionToken,
} from "../middlewares/profilingSessionToken"
import errorHandler from "../middlewares/errorHandler"

const rwaRouter = express.Router()
const PROFILING_CONNECTION_NAME = "profiling"

const { ISSUER_BASE_URL } = config.global
const { CLIENT_ID, CLIENT_SECRET, SECRET, SCOPE, BASE_URL, SESSION_STORE } =
  config.rwa
const { API_IDENTIFIER } = config.api
const {
  FGA_API_URL,
  FGA_STORE_ID,
  FGA_API_TOKEN_ISSUER,
  FGA_API_AUDIENCE,
  FGA_CLIENT_ID,
  FGA_CLIENT_SECRET,
} = config.fga

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
  idpLogout: true,
}

if (SESSION_STORE === "redis") {
  const redisClientOptions: RedisClientOptions = {}
  const redisUrl = process.env.REDIS_URL
  if (redisUrl) {
    redisClientOptions.url = redisUrl
  }
  let redisClient = createClient(redisClientOptions)
  redisClient.connect().catch(console.error)
  authConfig.session = {
    store: new RedisStore({ client: redisClient }),
  }
}

const fgaClient = new OpenFgaClient({
  apiUrl: FGA_API_URL,
  storeId: FGA_STORE_ID,
  credentials: {
    method: CredentialsMethod.ClientCredentials,
    config: {
      apiTokenIssuer: FGA_API_TOKEN_ISSUER,
      apiAudience: FGA_API_AUDIENCE,
      clientId: FGA_CLIENT_ID,
      clientSecret: FGA_CLIENT_SECRET,
    },
  },
})

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

rwaRouter.get("/fga", async (req, res, next) => {
  const sub = req.oidc.user?.sub
  let listViewers: Array<string> = []
  let objectName = ""
  if (sub) {
    const user = `user:${sub}`
    const object = (objectName = `doc:${sub}-default`)
    const defaultObject = {
      user,
      relation: "owner",
      object,
    }
    const check = await fgaClient.check(defaultObject)
    const defaultObjectExists = check.allowed || false
    if (!defaultObjectExists) {
      await fgaClient.writeTuples([defaultObject])
    }
    const expand = await fgaClient.expand({
      object,
      relation: "viewer",
    })
    const users = expand.tree?.root?.leaf?.users?.users
    if (users && users.length > 0) {
      listViewers = users
    }
  }

  res.render("./fga.ejs", {
    isAuthenticated: req.oidc.isAuthenticated(),
    issuerBaseURL: ISSUER_BASE_URL,
    listViewers,
    objectName,
  })
})

rwaRouter.get("/login/custom", (req, res, next) => {
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
    ...req.query,
  }
  delete logoutParams["returnTo"]
  res.oidc.logout({
    returnTo,
    logoutParams,
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

rwaRouter.get("/logout/federated", (req, res, next) => {
  const returnTo = req.query["returnTo"]
  if(returnTo) {
    res.oidc.logout({
      returnTo: returnTo.toString(),
      logoutParams: {
        federated: true,
      },
    })
  } else {
    res.oidc.logout({
      logoutParams: {
        federated: true,
      },
    })
  }
})

rwaRouter.use(errorHandler)

export default rwaRouter
