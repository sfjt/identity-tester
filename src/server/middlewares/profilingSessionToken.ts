import { Response, Request, NextFunction, RequestHandler } from "express"
import * as jose from "jose"

import config from "../config"

const { PROFILING_SESSION_SECRET } = config.global
const ENCODED_SESSION_SECRET = new TextEncoder().encode(
  PROFILING_SESSION_SECRET,
)

export function verifyProfilingSessionToken(): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session_token = req.query["session_token"]?.toString() || ""
    let sub = ""
    try {
      const { payload } = await jose.jwtVerify(
        session_token,
        ENCODED_SESSION_SECRET,
      )
      sub = payload.sub || ""
    } catch (err) {
      next(err)
    }
    res.locals["session_token"] = session_token
    res.locals["sub"] = sub
    res.locals["state"] = req.query["state"]?.toString() || ""
    next()
  }
}

export function signProfilingSessionToken(baseURL: string): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const sub = req.body["sub"]?.toString() || ""
    const state = req.body["state"]?.toString() || ""
    const testClaim = req.body["testClaim"]?.toString() || ""
    const payload = {
      sub,
      state,
      testClaim,
    }
    const header = {
      alg: "HS256",
      typ: "JWT",
    }
    let token = ""
    try {
      token = await new jose.SignJWT(payload)
        .setProtectedHeader(header)
        .setIssuedAt()
        .setIssuer(baseURL)
        .setExpirationTime("10m")
        .sign(ENCODED_SESSION_SECRET)
    } catch (err) {
      next(err)
    }
    res.locals["new_session_token"] = token
    res.locals["state"] = state
    next()
  }
}
