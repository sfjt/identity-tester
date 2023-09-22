import path from "path"

import express from "express"

import config from "./config"
import rwaRouter from "./routes/rwa"
import spaRouter from "./routes/spa"
import apiRouter from "./routes/api"

const app = express()
app.use("/builds", express.static("builds"))
app.use("/public", express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res, next) => {
  res.render("index.ejs")
})

app.use("/rwa", rwaRouter)
app.use("/spa", spaRouter)
app.use("/api", apiRouter)

const { NODE_ENV } = process.env
const { HOSTNAME, PORT } = config.global

if (NODE_ENV === "dev") {
  app.listen(PORT, () => {
    console.log(`Running on local machine: http://${HOSTNAME}:${PORT}`)
  })
}
