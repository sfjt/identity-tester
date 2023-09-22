import { WebAuth } from "auth0-js"

import {
  getConfig,
  toggleButtonsVisibility,
  show,
  setAPIAuthTestEvent,
} from "./commom"
;(async function () {
  const config = await getConfig()
  const { AUTH0_DOMAIN, CLIENT_ID, SCOPE, API_IDENTIFIER } = config

  const webAuth = new WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: CLIENT_ID,
    redirectUri: window.location.href,
    audience: API_IDENTIFIER,
    responseType: "token",
    scope: SCOPE,
  })
  window["__webAuth"] = webAuth

  const tokenStore = {
    accessToken: "",
    idToken: "",
  }

  function login() {
    webAuth.authorize()
  }

  function logout() {
    webAuth.logout({
      returnTo: window.location.href,
    })
  }

  const loginButton = document.getElementById("loginButton")
  loginButton?.addEventListener("click", login)
  const logoutButton = document.getElementById("logoutButton")
  logoutButton?.addEventListener("click", logout)
  setAPIAuthTestEvent(tokenStore)

  webAuth.parseHash({}, (err, authResult) => {
    if (err) {
      console.log("[parseHash]", err)
      return
    }
    if (!authResult) {
      console.log("[parseHash] authResult is empty.")
      return
    }
    console.log("[parseHash]", authResult)
    const { idToken, accessToken } = authResult
    tokenStore.accessToken = accessToken
    tokenStore.idToken = idToken
  })

  webAuth.checkSession(
    {
      prompt: "none",
      responseType: "token id_token",
    },
    (err, authResult) => {
      if (err) {
        console.log("[checkSession]", err)
        return
      }
      console.log("[checkSession]", authResult)
      toggleButtonsVisibility(true)
      const { idToken, accessToken } = authResult
      tokenStore.accessToken = accessToken
      tokenStore.idToken = idToken
      show("accessToken", accessToken ? accessToken : "N/A")
      show("idToken", idToken ? idToken : "N/A")
    },
  )
})()
