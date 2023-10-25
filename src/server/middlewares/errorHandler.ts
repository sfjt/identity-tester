import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if(req.path === "/rwa/callback") {
    const _error = req.query["error"]?.toString() || ""
    const error_description = req.query["error_description"]?.toString() || ""
    res.render("./callbackError.ejs", {
      error: _error,
      errorDescription: error_description,
    })
    return
  }
  next(error)
}

export default errorHandler
