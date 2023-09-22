;(async function () {
  const getConfig = window.__getConfig
  const toggleButtonsVisibility = window.__toggleButtonsVisibility
  const show = window.__show
  const setAPIAuthTestEvent = window.__setAPIAuthTestEvent

  const { AUTH0_DOMAIN, CLIENT_ID, SCOPE, API_IDENTIFIER } = await getConfig()

  const lock = new Auth0Lock(CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      responseType: "token",
      audience: API_IDENTIFIER,
      params: {
        scope: SCOPE,
      },
    },
    autoclose: true,
  })
  window.__lock = lock

  const tokenStore = {
    accessToken: "",
    idToken: "",
  }

  const loginButton = document.getElementById("loginButton")
  loginButton?.addEventListener("click", () => {
    lock.show()
  })
  const logoutButton = document.getElementById("logoutButton")
  logoutButton?.addEventListener("click", () => {
    lock.logout({
      returnTo: window.location.href,
    })
  })
  setAPIAuthTestEvent(tokenStore)

  lock.on("authenticated", (authResult) => {
    console.log("[on authenticated]", authResult)
    const { idToken, accessToken } = authResult
    tokenStore.accessToken = accessToken
    tokenStore.idToken = idToken
    toggleButtonsVisibility(true)
  })

  lock.checkSession(
    {
      responseType: "token id_token",
    },
    (err, authResult) => {
      if (err) {
        console.log("[checkSession]", err)
        return
      }
      console.log("[checkSession]", authResult)
      toggleButtonsVisibility(true)
      const { accessToken, idToken } = authResult
      tokenStore.accessToken = accessToken
      tokenStore.idToken = idToken
      show("accessToken", accessToken ? accessToken : "N/A")
      show("idToken", idToken ? idToken : "N/A")
    },
  )
})()
