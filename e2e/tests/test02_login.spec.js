require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { chromium } = require('playwright')

const TOKEN_KEYS = ['refresh', 'refreshToken']

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

test.describe('login', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto(`${process.env.VITE_REACT_APP_API_URL}/login`)
  })

  test.afterAll(async ({ browser }) => {
    context.close()
    browser.close()
  })

  test('login page working', async () => {
    const title = page.locator('h1')
    expect(title).toHaveText('Acceso')
  })

  test('user can login and sets tokens in localstorage', async () => {
    await page.locator('[placeholder="Introduce tu email"]').click()
    await page.locator('[placeholder="Introduce tu email"]').fill(`${process.env.PLAYWRIGHT_MAIL}`)
    await page.locator('[placeholder="Introduce tu contraseña"]').click()
    await page
      .locator('[placeholder="Introduce tu contraseña"]')
      .fill(`${process.env.PLAYWRIGHT_PASSWORD}`)

    await page.locator('button:has-text("Acceder")').click()
    await delay(2000)

    let storage = await context.storageState()
    storage = storage.origins[0].localStorage.map((s) => s.name)
    expect(storage.every((s) => TOKEN_KEYS.includes(s)))
  })
})
