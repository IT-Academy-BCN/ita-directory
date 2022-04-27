const { test, expect } = require('@playwright/test');

test.describe('it-directory e2e testing', () => {

  test('verify token adquisicion from login page', async ({ page }) => {
    
    await page.goto('http://localhost:3000/login');
    
    await page.locator('[placeholder="Introduce tu email"]').click();

    await page.locator('[placeholder="Introduce tu email"]').fill('test@test.test');

    await page.locator('[placeholder="Introduce tu contraseña"]').click();

    await page.locator('[placeholder="Introduce tu contraseña"]').fill('Test-test');

    await page.locator('button:has-text("Acceder")').click();
    
    await expect(page.locator('.status')).toHaveText('200 OK');
    
  });
});