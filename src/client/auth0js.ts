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
    let result = false
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
        storeAuthResult(authResult)
        showTokens()
        result = true
      },
    )
    return result
  }

  const loginButton = document.getElementById("loginButton")
  loginButton?.addEventListener("click", login)
  const logoutButton = document.getElementById("logoutButton")
  logoutButton?.addEventListener("click", logout)
  const testSilentAuthButton = document.getElementById("testSilentAuthButton")
  testSilentAuthButton?.addEventListener("click", silentAuth)
  addAPIAuthTestEventListener(tokenStore)

  function parseHash() {
    let result = false
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
      storeAuthResult(authResult)
      showTokens()
      result = true
    })
    return result
  }

  function storeAuthResult(authResult: any) {
    const { idToken, accessToken } = authResult
    tokenStore.accessToken = accessToken
    tokenStore.idToken = idToken
  }

  function showTokens() {
    const { idToken, accessToken } = tokenStore
    show("accessToken", accessToken ? accessToken : "N/A")
    show("idToken", idToken ? idToken : "N/A")
  }

  if(parseHash() || silentAuth()) {
    toggleButtonsVisibility(true)
  }
})()
