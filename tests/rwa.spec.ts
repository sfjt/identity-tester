import { test, expect } from "@playwright/test"

import { testUserCredentials } from "./testUser.ts"
import { loginWithUsernamePassword, handleConsent } from "./loginWithUsernamePassword"

const { E2E_TEST_USERNAME, E2E_TEST_PASSWORD } = testUserCredentials()

test.describe("Regular Web Application", () => {
  test("Login and logout with username+password", async ({ page }) => {
    await page.goto("http://localhost:3000/rwa")
    await page.getByTestId("simpleLogin").click()
    await expect(page.getByText("Welcome")).toBeVisible()
    await loginWithUsernamePassword(page, E2E_TEST_USERNAME, E2E_TEST_PASSWORD)
    await handleConsent(page)
    await expect(page).toHaveURL("http://localhost:3000/rwa")
    await expect(page.getByTestId("displayIDToken")).toHaveCount(1)
    await expect(page.getByTestId("displayAccessToken")).toHaveCount(1)
    await page.getByTestId("logout").click()
    await expect(page.getByTestId("displayIDToken")).toHaveCount(0)
    await expect(page.getByTestId("displayAccessToken")).toHaveCount(0)
  })
})
