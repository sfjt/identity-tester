# identity-tester

Auth0 all in one tester.

**Not for production use. Low security.**

## prerequisites

[yarn](https://yarnpkg.com/)

## quickstart

1. Rename `env.example` to `.env` and fill required information.
2. `yarn install`
3. `yarn run local`

If you updated one of the files in `src/client`, run `yarn build` to generate bundle JavaScript files.

## https on your local machine

1. Install [mkcert](https://github.com/FiloSottile/mkcert). And trust the mkcert Root CA.
2. Create a certificate and a key for localhost (localhost.pem and localhost-key.pem,) place them under `./key` directory.
3. Run `yarn run local:https`
