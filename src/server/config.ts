import "dotenv/config"

const config = {
  global: {
    AUTH0_DOMAIN: getEnv("AUTH0_DOMAIN"),
    HOSTNAME: getEnv("HOSTNAME", "localhost"),
    PORT: getEnv("PORT", "3000"),
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
  },
  spa: {
    CLIENT_ID: getEnv("SPA_CLIENT_ID"),
    SCOPE: getEnv("SPA_SCOPE", "openid profile email"),
  },
  api: {
    API_IDENTIFIER: getEnv("API_IDENTIFIER"),
  },
}

function getEnv(name: string, defaultValue = ""): string {
  const v = process.env[name]
  if (v) {
    return v
  }
  return defaultValue
}

export default config
