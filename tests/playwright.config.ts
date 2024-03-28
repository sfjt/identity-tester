import { defineConfig } from "@playwright/test"

export default defineConfig({
  projects: [
    {
      name: "global setup",
      testMatch: /global.setup\.ts/,
    },
    {
      name: "Chromium",
      testDir: "../tests",
      use: {
        browserName: "chromium",
      },
    },
  ],
})
