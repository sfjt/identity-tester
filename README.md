# identity-tester

Auth0 all in one tester.

**Not for production use. Low security.**

## Prerequisites

[yarn](https://yarnpkg.com/)

[mkcert](https://github.com/FiloSottile/mkcert) (Only if you want to test with https locally)

## Quickstart

1. Rename `env.example` to `.env` and fill required information.
2. `yarn install`
3. `yarn run local`

If you updated one of the files in `src/client`, run `yarn build` to generate bundle JavaScript files.

## Test https on your local machine

1. Install [mkcert](https://github.com/FiloSottile/mkcert). And trust the mkcert Root CA.
2. Create a certificate and a key for localhost (localhost.pem and localhost-key.pem,) place them under `./key` directory.
3. Run `yarn run local:https`

## Switch environment variables

You can save multiple environment variable files, for example, `.env.us`, `env.eu.prod`, etc., to test multiple tenants.

The files with the name pattern `.env.*` except for `.env.example` will be git-ignored.

Switch the set of environment variables by running `yarn run switchenv "<the env file name you want to apply>"`.
