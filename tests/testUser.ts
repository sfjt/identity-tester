import "dotenv/config"

import { ManagementClient, ManagementApiError } from "auth0"

const CANONICAL_DOMAIN = process.env["CANONICAL_DOMAIN"] || ""
const M2M_CLIENT_ID = process.env["M2M_CLIENT_ID"] || ""
const M2M_CLIENT_SECRET = process.env["M2M_CLIENT_SECRET"] || ""
const E2E_TEST_USERNAME = process.env["E2E_TEST_USERNAME"] || ""
const E2E_TEST_PASSWORD = process.env["E2E_TEST_PASSWORD"] || ""

const managementClient = new ManagementClient({
  clientId: M2M_CLIENT_ID,
  clientSecret: M2M_CLIENT_SECRET,
  domain: CANONICAL_DOMAIN,
})

export function testUserCredentials() {
  return { E2E_TEST_USERNAME, E2E_TEST_PASSWORD }
}

export async function ensureE2ETestUserExists(email: string, password: string) {
  const resGetByEmail = await managementClient.usersByEmail.getByEmail({ email })
  if (!resGetByEmail.data.length) {
    try {
      await managementClient.users.create({
        email,
        password,
        connection: "Username-Password-Authentication",
      })
    } catch (e: any) {
      if(e.msg === "The user already exists.") {
        // Ignore the error.
        // There can be race conditions because the tests will run in parallel.
      } else {
        console.log(e)
      }
    }
  }
}
