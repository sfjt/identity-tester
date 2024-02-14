/**
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  const { REDIRECT_TO, AUTH0_DOMAIN, PROFILING_SESSION_SECRET } = event.secrets

  console.log("===== ProgressiveProfiling STARTED =====")

  const connName = event.connection.name
  console.log("connName:", connName)
  if (connName !== "profiling") {
    console.log("Skip profiling.")
    return
  }
  const state = event?.transaction?.state
  if(state) {
    console.log("Redirecting the user to:", REDIRECT_TO)
    const token = api.redirect.encodeToken({
      secret: PROFILING_SESSION_SECRET,
      expiresInSeconds: 60, 
      payload: {
        email: event.user.email,
        externalUserId: "dummy|1234",
        continue_uri: `https://${AUTH0_DOMAIN}/continue`,
        state: state
      },
    })
    api.redirect.sendUserTo(REDIRECT_TO, {
      query: { session_token: token }
    })
  }
}

/**
 * Handler that will be invoked when this action is resuming after an external redirect. If your
 * onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onContinuePostLogin = async (event, api) => {
  const { AUTH0_DOMAIN, PROFILING_SESSION_SECRET } = event.secrets
  const prefix = `https://${AUTH0_DOMAIN}`

  console.log("===== ProgressiveProfiling RESUMED =====")

  api.user.setAppMetadata("profilingDone:", true)

  const payload = api.redirect.validateToken({
    secret: PROFILING_SESSION_SECRET,
    tokenParameterName: "token",
  })
  console.log("payload:", payload)
  api.idToken.setCustomClaim(`${prefix}/testClaim`, payload.testClaim)
}
