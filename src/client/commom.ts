import axios from "axios"

export async function getConfig() {
  console.log("[getConfig] Getting client config.")
  const { data } = await axios.get("/spa/config")
  console.log("[getConfig]", data)
  return data
}

export function toggleButtonsVisibility(loggedIn: boolean) {
  const displayWhenLoggetIn = document.getElementById("authorized")
  const displayWhenLoggedOut = document.getElementById("unauthorized")
  if (loggedIn) {
    displayWhenLoggetIn?.classList.remove("hide")
    displayWhenLoggedOut?.classList.add("hide")
  }
  if (!loggedIn) {
    displayWhenLoggetIn?.classList.add("hide")
    displayWhenLoggedOut?.classList.remove("hide")
  }
}

export function show(elementId: string, data: string) {
  const elem = document.getElementById(elementId)
  if (!elem) {
    return
  }
  elem.textContent = data
}

type TokenStore = {
  accessToken: string
  idToken: string
}

export async function addAPIAuthTestEventListener(store: TokenStore) {
  async function test() {
    console.log("[apiAuthTest] Requesting.")
    try {
      const resp = await axios.get("/api/authtest", {
        headers: {
          Authorization: `Bearer ${store.accessToken}`,
        },
      })
      show("externalAPIResponse", JSON.stringify(resp.data))
    } catch (err) {
      console.error("[apiAuthTest]", err)
      show(
        "externalAPIResponse",
        `${err.response.status} ${err.response.statusText}`,
      )
    }
  }
  const testExternalAPIButton = document.getElementById("testExternalAPIButton")
  testExternalAPIButton?.addEventListener("click", test)
}

export function parseCustomParams() {
  const customParamsTextarea = document.getElementById("customParams") as
    | HTMLTextAreaElement
    | undefined
  if (!customParamsTextarea) {
    return
  }
  const txt = customParamsTextarea.value
  let params = {}
  try {
    params = JSON.parse(txt)
    customParamsTextarea.style.borderColor = "green"
    return params
  } catch (err) {
    console.log("[parseCustomParams]", err)
    customParamsTextarea.style.borderColor = "red"
    throw err
  }
}
