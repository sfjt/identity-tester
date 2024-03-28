import { Page } from "@playwright/test"

export async function loginWithUsernamePassword(
  page: Page,
  email: string,
  password: string,
) {
  await page.locator("input[name='username']").fill(email)
  await page.locator("input[name='password']").fill(password)
  await page.locator("button[data-action-button-primary]").click()
}

export async function handleConsent(page: Page) {
  if (await page.getByText("Authorize App").isVisible()) {
    await page.locator("button[type='submit'][value='accept']").click()
  }
}
