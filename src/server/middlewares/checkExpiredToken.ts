import { Response, Request, NextFunction, RequestHandler } from "express"

export function checkExpiredToken(url: string): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.oidc
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
