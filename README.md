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

1. Configure your Auth0 tenant. 
    - Create a [Regular Web Application](https://auth0.com/docs/get-started/auth0-overview/create-applications/regular-web-apps) and a [SPA](https://auth0.com/docs/get-started/auth0-overview/create-applications/single-page-web-apps). Register an [external API](https://auth0.com/docs/get-started/auth0-overview/set-up-apis).
    - Set Callback URLs.
      - Regular Web Application:
        ```
        http://localhost/3000/rwa/callback, https://localhost/3000/rwa/callback
        ```
      - SPA: 
        ```
        http://localhost/3000/auth0spajs, http://localhost/3000/auth0js, http://localhost/3000/lock, https://localhost/3000/auth0spajs, https://localhost/3000/auth0js, https://localhost/3000/lock
        ```
2. Rename `env.example` to `.env` and fill required information.
3. `yarn install`
4. If you updated one of the files in `src/client`, run `yarn build` to generate bundle JavaScript files.
5. `yarn run local`

## Test https on your local machine

1. Install [mkcert](https://github.com/FiloSottile/mkcert). And trust the mkcert Root CA.
2. Create a certificate and a key for localhost (localhost.pem and localhost-key.pem,) place them under `./keys` directory.
3. Run `yarn run local:https`

## Switch environment variables

You can save multiple environment variable files, for example, `.env.us`, `env.eu.prod`, etc., to test multiple tenants.

The files with the name pattern `.env.*` except for `.env.example` will be git-ignored.

Switch the set of environment variables by running `yarn run switchenv ".env.us"`. (It will overwrite .env file.)
