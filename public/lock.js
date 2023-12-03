;(async function () {
  const getConfig = window.__getConfig
  const toggleButtonsVisibility = window.__toggleButtonsVisibility
  const show = window.__show
  const addAPIAuthTestEventListener = window.__addAPIAuthTestEventListener

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
  window["__lock"] = lock

  const tokenStore = {
    accessToken: "",
    idToken: "",
  }
  window["__tokenStore"] = tokenStore

  function silentAuth() {
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
        storeAuthResult(authResult)
        toggleButtonsVisibility(true)
        const {accessToken, idToken} = tokenStore
        show("accessToken", accessToken ? accessToken : "N/A")
        show("idToken", idToken ? idToken : "N/A")
      },
    )
  }

  function storeAuthResult(authResult) {
    const { idToken, accessToken } = authResult
    tokenStore.accessToken = accessToken
    tokenStore.idToken = idToken
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
  const testSilentAuthButton = document.getElementById("testSilentAuthButton")
  testSilentAuthButton?.addEventListener("click", silentAuth)
  addAPIAuthTestEventListener(tokenStore)

  lock.on("authenticated", function (authResult) {
    console.log("[on authenticated]", authResult)
    storeAuthResult(authResult)
    toggleButtonsVisibility(true)
    const {accessToken, idToken} = tokenStore
    show("accessToken", accessToken ? accessToken : "N/A")
    show("idToken", idToken ? idToken : "N/A")
  })

  if(!tokenStore.accessToken) {
    silentAuth()
  }
})()
