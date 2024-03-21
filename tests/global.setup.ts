import { test as setup } from "@playwright/test";

import { ensureE2ETestUserExists, testUserCredentials } from "./testUser.ts"

const { E2E_TEST_USERNAME, E2E_TEST_PASSWORD } = testUserCredentials()

setup("Ensure an E2E testing user exists", async ({ }) => {
  await ensureE2ETestUserExists(E2E_TEST_USERNAME, E2E_TEST_PASSWORD)
})