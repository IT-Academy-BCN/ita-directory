require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { chromium } = require('playwright')

test.describe.serial('register', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto(`${process.env.VITE_REACT_APP_API_URL}/register`)
  })

  test.afterAll(async ({ browser }) => {
    context.close()
    browser.close()
  })

  test('register page working', async () => {
    const title = page.locator('h1')
    expect(title).toHaveText('Registro')
  })

  test('A user can register', async () => {
    await page.locator('[placeholder="Nombre"]').click()
    await page.locator('[placeholder="Nombre"]').fill(`${process.env.PLAYWRIGHT_NAME}`)
    await page.locator('[placeholder="Apellido"]').click()
    await page.locator('[placeholder="Apellido"]').fill(`${process.env.PLAYWRIGHT_LASTNAME}`)
    await page.locator('[placeholder="Email"]').click()
    await page.locator('[placeholder="Email"]').fill(`${process.env.PLAYWRIGHT_MAIL}`)
    await page.locator('[placeholder="Contraseña"]').click()
    await page.locator('[placeholder="Contraseña"]').fill(`${process.env.PLAYWRIGHT_PASSWORD}`)
    await page.locator('input[type=checkbox]').check()
    await page.locator('button:has-text("Registrarme")').click()

    page.waitForResponse((res) => {
      expect(res.status()).toBe(200)
    })
  })

  test('unable to register a user with wrong name', async () => {
    await page.locator('[placeholder="Nombre"]').click()
    await page.locator('[placeholder="Nombre"]').fill(`${process.env.PLAYWRIGHT_WRONG_NAME}`)
    await page.locator('[placeholder="Apellido"]').click()
    await page.locator('[placeholder="Apellido"]').fill(`${process.env.PLAYWRIGHT_LASTNAME}`)
    await page.locator('[placeholder="Email"]').click()
    await page.locator('[placeholder="Email"]').fill(`${process.env.PLAYWRIGHT_MAIL}`)
    await page.locator('[placeholder="Contraseña"]').click()
    await page.locator('[placeholder="Contraseña"]').fill(`${process.env.PLAYWRIGHT_PASSWORD}`)
    await page.locator('input[type=checkbox]').check()
    await page.locator('button:has-text("Registrarme")').click()

    page.waitForResponse((res) => {
      expect(res.status()).toBe(400)
    })
  })
})
