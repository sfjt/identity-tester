import "dotenv/config"

import { Page } from '@playwright/test'

const E2E_TEST_USERNAME = process.env["E2E_TEST_USERNAME"] || ""
const E2E_TEST_PASSWORD = process.env["E2E_TEST_PASSWORD"] || ""

export async function loginWithUsernamePassword(page: Page) {
  await page.locator("input[name='username']").fill(E2E_TEST_USERNAME)
  await page.locator("input[name='password']").fill(E2E_TEST_PASSWORD)
  await page.locator("button[data-action-button-primary]").click()
}

