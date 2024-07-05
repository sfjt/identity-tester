import "dotenv/config"

const AUTH0_DOMAIN = getEnv("AUTH0_DOMAIN")
const HOSTNAME = getEnv("HOSTNAME", "localhost")
const PORT = getEnv("PORT", "3000")
const CANONICAL_DOMAIN = getEnv("CANONICAL_DOMAIN")

const config = {
  global: {
    AUTH0_DOMAIN,
    CANONICAL_DOMAIN,
    HOSTNAME,
    PORT,
    ISSUER_BASE_URL: `https://${AUTH0_DOMAIN}`,
    PROFILING_SESSION_SECRET: getEnv(
      "PROFILING_SESSION_SECRET",
      "Thequickbrownfoxjumpsoverthelazydog",
    ),
  },
  rwa: {
    CLIENT_ID: getEnv("RWA_CLIENT_ID"),
    CLIENT_SECRET: getEnv(
      "RWA_CLIENT_SECRET",
      "Thequickbrownfoxjumpsoverthelazydog",
    ),
    SECRET: getEnv("RWA_SESSION_SECRET"),
    SCOPE: getEnv("RWA_SCOPE", "openid profile email"),
    BASE_URL: baseURL("rwa"),
    SESSION_STORE: getEnv("SESSION_STORE", "default"),
  },
  mfaSettings: {
    CLIENT_ID: getEnv("MFA_SETTINGS_CLIENT_ID"),
    CLIENT_SECRET: getEnv(
      "MFA_SETTINGS_CLIENT_SECRET",
      "Thequickbrownfoxjumpsoverthelazydog",
    ),
    SECRET: getEnv("MFA_SETTINGS_SESSION_SECRET"),
    SCOPE: getEnv(
      "MFA_SETTINGS_SCOPE",
      "openid profile email enroll read:authenticators remove:authenticators",
    ),
    BASE_URL: baseURL("mfa"),
    AUDIENCE: `https://${CANONICAL_DOMAIN}/mfa/`,
  },
  spa: {
    CLIENT_ID: getEnv("SPA_CLIENT_ID"),
    SCOPE: getEnv("SPA_SCOPE", "openid profile email"),
  },
  api: {
    API_IDENTIFIER: getEnv("API_IDENTIFIER"),
  },
  m2m: {
    M2M_CLIENT_ID: getEnv("M2M_CLIENT_ID"),
    M2M_CLIENT_SECRET: getEnv("M2M_CLIENT_SECRET"),
  },
  fga: {
    FGA_API_URL: getEnv("FGA_API_URL"),
    FGA_API_AUDIENCE: getEnv("FGA_API_AUDIENCE"),
    FGA_API_TOKEN_ISSUER: getEnv("FGA_API_TOKEN_ISSUER"),
    FGA_STORE_ID: getEnv("FGA_STORE_ID"),
    FGA_CLIENT_ID: getEnv("FGA_CLIENT_ID"),
    FGA_CLIENT_SECRET: getEnv("FGA_CLIENT_SECRET"),
  },
}

function getEnv(name: string, defaultValue = ""): string {
  const v = process.env[name]
  if (v) {
    return v
  }
  return defaultValue
}

function baseURL(baseRoute: string) {
  const { NODE_ENV } = process.env
  if (NODE_ENV === "dev") {
    return `http://${HOSTNAME}:${PORT}/${baseRoute}`
  }
  if (NODE_ENV === "devhttps") {
    return `https://${HOSTNAME}:${PORT}/${baseRoute}`
  }
  if (NODE_ENV === "prod") {
    return `https://${HOSTNAME}/${baseRoute}`
  }
  throw new Error(`Unexpected NODE_ENV value: ${NODE_ENV}`)
}

export default config
