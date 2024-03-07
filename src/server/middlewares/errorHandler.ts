import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const _error = req.query["error"]?.toString() || ""
  const error_description = req.query["error_description"]?.toString() || ""
  if (_error && error_description) {
    res.render("./callbackError.ejs", {
      error: _error,
      errorDescription: error_description,
      trace: error,
    })
    return
  }
  next(error)
}

export default errorHandler
