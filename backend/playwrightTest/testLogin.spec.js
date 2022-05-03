/* eslint-disable import/newline-after-import */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const { test, expect } = require('@playwright/test')
const playwright = require('playwright')

// Verify app is logged in with multi browser

;(async () => {
  const { webkit, firefox, chromium } = playwright

  for (const browserType of [webkit, firefox, chromium]) {
    // Launch browser
    const browser = await browserType.launch()
    // Create a context
    const context = await browser.newContext()
    // Create a page
    const page = await context.newPage()

    await page.goto('http://localhost:3000/login')

    await page.locator('[placeholder="Introduce tu email"]').click()

    await page.locator('[placeholder="Introduce tu email"]').fill('process.env.PLAYWRIGHT_EMAIL')

    await page.locator('[placeholder="Introduce tu contraseña"]').click()

    await page
      .locator('[placeholder="Introduce tu contraseña"]')
      .fill('process.env.PLAYWRIGHT_PASSWORD')

    await page.locator('button:has-text("Acceder")').click()

    await context.storageState({
      path: 'playwrightTest/state/state.json',
    })

    await page.screenshot({
      path: `playwrightTest/screenshots/image_${browserType.name()}.png`,
      fullPage: true,
    })

    await context.close()
    await browser.close()
  }
})()

test.describe('Test it-academy-directory login', () => {
  test('Should not ask for credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    const url = page.url()
    expect(url).toMatch('http://localhost:3000/login')
  })

  test('check the web site designer', async ({ page }) => {
    await playwright.chromium.launch()
    await page.goto('http://localhost:3000/login')
    const name = await page.$eval(
      '//*[@id="root"]/div[2]/div[2]/footer/div[1]/div[2]',
      (designer) => designer.textContent.trim()
    )
    expect(name).toEqual('Diseñado por Kevin Mamaquipara ITAcademy de Barcelona Activa')
  })
})
