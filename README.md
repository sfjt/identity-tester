# identity-tester

Auth0 all in one tester.

**For testing and learning purposes only. This is NOT an Okta official repository.**

Do not copy and paste the code in production without thorough reviewing and testing. There is no guarantee that the quality and security level of the code meet your business requirements.

## Prerequisites

See the `.nvmrc` file for the [Node.js](https://nodejs.org/en) version.

- An [Auth0](https://auth0.com/) tenant
- [yarn](https://yarnpkg.com/)
- [mkcert](https://github.com/FiloSottile/mkcert) (Only if you want to test with https locally)

## Quickstart

### 1. Configure your tenant

#### Regular Web Application #1
- Create a [Regular Web Application](https://auth0.com/docs/get-started/auth0-overview/create-applications/regular-web-apps).
- Register callback URLs:
  ```
  http://localhost:3000/rwa/callback, https://localhost:3000/rwa/callback
  ```
- Register allowed logout URLs:
  ```
  http://localhost:3000/rwa, https://localhost:3000/rwa
  ```

#### SPA
- Create a [SPA](https://auth0.com/docs/get-started/auth0-overview/create-applications/single-page-web-apps).
- Register callback URLs and allowed logout URLs (use the same values):
  ```
  http://localhost:3000/auth0spajs, http://localhost:3000/auth0js, http://localhost:3000/lock, https://localhost:3000/auth0spajs, https://localhost:3000/auth0js, https://localhost:3000/lock
  ```
- Register allowed web origins:
  ```
  http://localhost:3000, https://localhost:3000
  ```

#### External API
- Register an [external API](https://auth0.com/docs/get-started/auth0-overview/set-up-apis).

#### Regular Web Application #2 for MFA Settings
- Create another Regular Web Application [with the MFA grant type enabled](https://auth0.com/docs/get-started/applications/update-grant-types).
- Register callback URLs:
  ```
  http://localhost:3000/mfa/callback, https://localhost:3000/mfa/callback
  ```
- Register allowed logout URLs:
  ```
  http://localhost:3000, https://localhost:3000
  ```

### 2. Configure your application

Rename `env.example` to `.env` and fill required information.

| Name | Description |
| ---- | ---- |
| CANONICAL_DOMAIN | The "canonical domain" meaning the default domain mame of your tenant. |
| AUTH0_DOMAIN | Either the [custom domain](https://auth0.com/docs/customize/custom-domains) or the canonical domain of your tenant. |
| RWA_CLIENT_ID | The client ID of your Regular Web Application (#1). |
| RWA_CLIENT_SECRET | The client secret of your Regular Web Application (#1). |
| RWA_SESSION_SECRET | A long random string used to encrypt the Regular Web Application (#1) session. |
| MFA_SETTINGS_CLIENT_ID | The client ID of your Regular Web Application (#2). |
| MFA_SETTINGS_CLIENT_SECRET | The client secret of your Regular Web Application (#2). |
| MFA_SETTINGS_SESSION_SECRET | A long random string used to encrypt the Regular Web Application (#2) session. |
| PROFILING_SESSION_SECRET | A long random string used to encrypt the [Progressive Profiling](https://auth0.com/docs/customize/actions/flows-and-triggers/login-flow/redirect-with-actions) session. |
| SPA_CLIENT_ID | The client ID of your SPA. |
| API_IDENTIFIER | The API identifier of your external API. |

### 3. Run the application

Run `yarn install` then `yarn run local`

## Test https on your local machine

1. Install [mkcert](https://github.com/FiloSottile/mkcert). And trust the mkcert Root CA.
2. Create a certificate and a key for localhost (localhost.pem and localhost-key.pem,) place them under `./keys` directory.
3. Run `yarn run local:https`

## Switch environment variables

You can save multiple environment variable files, for example, `.env.us`, `env.eu.prod`, etc., to test multiple tenants.

The files with the name pattern `.env.*` except for `.env.example` will be git-ignored.

Switch the set of environment variables by running `yarn run switchenv ".env.us"`. (It will overwrite the exiting .env file.)
