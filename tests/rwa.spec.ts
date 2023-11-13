import { test, expect } from '@playwright/test';


test('normal login flow', async ({ page }) => {
  await page.goto('http://localhost:3000/rwa');

  await page.getByTestId("simpleLogin").click()
  await expect(page).toHaveTitle(/Log in/);
});
