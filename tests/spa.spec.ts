import { test, expect } from '@playwright/test'

import {loginWithUsernamePassword} from './loginWithUsernamePassword'

test.describe('auth0-spa-js', () => {
  test("Login and logout with username+password", async ({ page }) => {
    await page.goto("http://localhost:3000/spa/auth0spajs")
    await page.getByTestId("login").click()
    await expect(page).toHaveTitle(/Log in/)
    await loginWithUsernamePassword(page)
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/spa\/auth0spajs\?code=.+&state=.+/)
    await expect(page.getByTestId("displayIDToken")).not.toHaveText("N/A")
    await expect(page.getByTestId("displayAccessToken")).not.toHaveText("N/A")
    await page.getByTestId("logout").click()
    await expect(page.getByTestId("displayIDToken")).toHaveText("N/A")
    await expect(page.getByTestId("displayAccessToken")).toHaveText("N/A")
  })
})
