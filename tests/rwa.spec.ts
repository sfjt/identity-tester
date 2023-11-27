import { test, expect } from '@playwright/test'

import {loginWithUsernamePassword} from './loginWithUsernamePassword'

test.describe("Regular Web Application", () => {
  test("Login and logout with username+password", async ({ page }) => {
    await page.goto('http://localhost:3000/rwa')
    await page.getByTestId("simpleLogin").click()
    await expect(page).toHaveTitle(/Log in/)
    await loginWithUsernamePassword(page)
    await expect(page).toHaveURL("http://localhost:3000/rwa")
    await expect(page.getByTestId("displayIDToken")).toHaveCount(1)
    await expect(page.getByTestId("displayAccessToken")).toHaveCount(1)
    await page.getByTestId("logout").click()
    await expect(page.getByTestId("displayIDToken")).toHaveCount(0)
    await expect(page.getByTestId("displayAccessToken")).toHaveCount(0)
  })
})
