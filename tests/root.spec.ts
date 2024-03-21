import { test, expect } from "@playwright/test"

test("link to testing apps", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await expect(page.getByText("Regurar Web Application")).toHaveAttribute(
    "href",
    "/rwa",
  )
  await expect(page.getByText("Single Page Application")).toHaveAttribute(
    "href",
    "/spa",
  )
  await expect(page.getByText("MFA Settings")).toHaveAttribute("href", "/mfa")
})
