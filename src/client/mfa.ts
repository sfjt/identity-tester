import axios from "axios"
;(async function () {
  const authenticatorIDElems =
    document.getElementsByClassName("authenticatorId")
  Array.from(authenticatorIDElems).forEach((elem) => {
    if (elem instanceof HTMLElement) {
      const authenticatorID = elem.dataset.authenticatorId
      const path = `/mfa/delete/${authenticatorID}`
      const deleteButton = document.createElement("button")
      deleteButton.appendChild(document.createTextNode("DELETE"))
      deleteButton.type = "button"
      deleteButton.className = "deleteButton"
      deleteButton.addEventListener("click", async () => {
        const confirm = window.confirm(`Delete ${authenticatorID}?`)
        if (!confirm) {
          return
        }
        const resp = await axios.delete(path)
        console.log("Deletetion request:", authenticatorID, resp.status)
        window.location.reload()
      })
      elem.appendChild(deleteButton)
    }
  })
})()
