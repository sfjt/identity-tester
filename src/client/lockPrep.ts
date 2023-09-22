import {
  getConfig,
  toggleButtonsVisibility,
  show,
  setAPIAuthTestEvent,
} from "./commom"

// auth0-lock cannot be bundled by esbuild because it uses NodeJS module (namely, "events").
// See ./src/server/views/lock.ejs and ./public/lock.js
;(async function () {
  window["__getConfig"] = getConfig
  window["__toggleButtonsVisibility"] = toggleButtonsVisibility
  window["__show"] = show
  window["__setAPIAuthTestEvent"] = setAPIAuthTestEvent
})()
