import { WebAuth } from "auth0-js"

import {
  getConfig,
  toggleButtonsVisibility,
  show,
  addAPIAuthTestEventListener,
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
  window["__tokenStore"] = tokenStore

  function login() {
    webAuth.authorize()
  }

  function logout() {
    webAuth.logout({
      returnTo: window.location.href,
    })
  }

  function silentAuth() {
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
  }

  const loginButton = document.getElementById("loginButton")
  loginButton?.addEventListener("click", login)
  const logoutButton = document.getElementById("logoutButton")
  logoutButton?.addEventListener("click", logout)
  const testSilentAuthButton = document.getElementById("testSilentAuthButton")
  testSilentAuthButton?.addEventListener("click", silentAuth)
  addAPIAuthTestEventListener(tokenStore)

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

  silentAuth()
})()
