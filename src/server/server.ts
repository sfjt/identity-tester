import fs from "fs"
import https from "https"
import path from "path"

import express from "express"
import bodyParser from "body-parser"

import config from "./config"
import rwaRouter from "./routes/rwa"
import spaRouter from "./routes/spa"
import apiRouter from "./routes/api"

const app = express()
app.use("/builds", express.static("builds"))
app.use("/public", express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
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
if (NODE_ENV === "devhttps") {
  const keyPath = path.join(__dirname, "../..", "keys/localhost-key.pem")
  const certPath = path.join(__dirname, "../..", "keys/localhost.pem")
  const key = fs.readFileSync(keyPath, "utf-8")
  const cert = fs.readFileSync(certPath, "utf-8")
  https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log(`Running on local: https://${HOSTNAME}:${PORT}`)
  })
}
