import { Response, Request, NextFunction, RequestHandler } from "express"

export function checkExpiredToken(url: string): RequestHandler {
  return async (req: any, res: Response, next: NextFunction) => {
    const accessToken = req?.oidc.accessToken
    if (accessToken?.isExpired()) {
      res.render("./expiredToken.ejs", {
        accessToken: accessToken?.access_token || "None",
        url,
      })
      return
    }
    next()
  }
}
