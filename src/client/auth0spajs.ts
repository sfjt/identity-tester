import { createAuth0Client } from "@auth0/auth0-spa-js"

import {
  getConfig,
  toggleButtonsVisibility,
  show,
  addAPIAuthTestEventListener,
  parseCustomParams,
} from "./commom"
;(async function () {
  const config = await getConfig()
  const { AUTH0_DOMAIN, CLIENT_ID, SCOPE, API_IDENTIFIER } = config

  const cookieDomain = AUTH0_DOMAIN.replace(AUTH0_DOMAIN.split(".")[0], "")
  console.log("cookieDomain", cookieDomain)
  const client = await createAuth0Client({
    domain: AUTH0_DOMAIN,
    clientId: CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.href,
      audience: API_IDENTIFIER,
      scope: SCOPE,
    },
    useRefreshTokens: true,
    cookieDomain,
  })
  window["__auth0Client"] = client

  const tokenStore = {
    accessToken: "",
    idToken: "",
  }
  window["__tokenStore"] = tokenStore

  async function login() {
    await client.loginWithRedirect()
  }

  async function loginWithCustomParams() {
    let params: any = {}
    try {
      params = parseCustomParams()
    } catch (err) {
      console.log("[loginWithCustomParams] Invalid JSON string.")
      return
    }
    console.log(
      "[loginWithCustomParams] Logging in with custom parans.",
      params,
    )
    await client.loginWithRedirect(params)
  }

  async function logout() {
    await client.logout()
    toggleButtonsVisibility(false)
  }

  async function silentAuth() {
    try {
      console.log("[getTokenSilently] Requesting an access token.")
      const accessToken = await client.getTokenSilently()
      show("accessToken", accessToken ? accessToken : "N/A")
      if (accessToken) {
        toggleButtonsVisibility(true)
        tokenStore.accessToken = accessToken
      }
    } catch (err) {
      console.log("[getTokenSilently]", err)
      show("accessToken", "N/A")
    }

    try {
      console.log("[getIdTokenClaims] Requesting an id token.")
      const idToken = await client.getIdTokenClaims()
      show("idToken", idToken ? idToken.__raw : "N/A")
      if (idToken?.__raw) {
        tokenStore.idToken = idToken.__raw
      }
    } catch (err) {
      console.log("[getIdTokenClaims]", err)
      show("idToken", "N/A")
    }
  }

  const loginButton = document.getElementById("loginButton")
  loginButton?.addEventListener("click", login)
  const logoutButton = document.getElementById("logoutButton")
  logoutButton?.addEventListener("click", logout)
  const loginWithCustomParamsButton = document.getElementById(
    "loginWithCustomParamsButton",
  )
  loginWithCustomParamsButton?.addEventListener("click", loginWithCustomParams)
  const testSilentAuthButton = document.getElementById("testSilentAuthButton")
  testSilentAuthButton?.addEventListener("click", silentAuth)
  addAPIAuthTestEventListener(tokenStore)

  try {
    console.log("[handleRedirectCallback] Handling callback.")
    await client.handleRedirectCallback()
  } catch (err) {
    console.log("[handleRedirectCallback]", err)
  }

  await silentAuth()
})()
