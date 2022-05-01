const { devices } = require('@playwright/test')

const config = {
  use: {
    headless: false,
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop safari'] },
    },
  ],
}

module.exports = config
