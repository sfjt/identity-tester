;(function () {
  function addFederatedLogoutEvent() {
    const federatedLogoutButton = document.getElementById(
      "federatedLogoutButton",
    )
    if(federatedLogoutButton){
      federatedLogoutButton.addEventListener(
        "click",
        federatedLogout,
      )
    }

    function federatedLogout() {
      const returnToInput = document.getElementById("returnToInput")
      const returnToValue = encodeURIComponent(returnToInput.value)
      const url = `${window.location.href}/logout/federated?returnTo=${returnToValue}`
      window.location.href = url
    }
  }
  
  function addRequestWithCustomParamsEvent() {
    const loginWithCustomParamsButton = document.getElementById(
      "loginWithCustomParamsButton",
    )
    loginWithCustomParamsButton.addEventListener(
      "click",
      requestWithCustomParams,
    )
  }

  function requestWithCustomParams() {
    const customParamsTextarea = document.getElementById("customParams")
    const txt = customParamsTextarea.value
    let params = {}
    try {
      params = JSON.parse(txt)
      customParamsTextarea.style.borderColor = "green"
    } catch (err) {
      console.log("[parseCustomParams]", err)
      customParamsTextarea.style.borderColor = "red"
      return
    }
    let queryString = ""
    for (const [key, val] of Object.entries(params)) {
      queryString += `${key}=${val}&`
    }
    if (!queryString) {
      console.log(
        "[parseCustomParams] Error, the query string was empty.",
        queryString,
      )
      customParamsTextarea.style.borderColor = "red"
      return
    }
    queryString = encodeURI(queryString.slice(0, -1))
    url = `${window.location.href}/login/custom?${queryString}`
    console.log("[requestWithCustomParams]", url)
    window.location.href = url
  }

  addRequestWithCustomParamsEvent()
  addFederatedLogoutEvent()
})()
