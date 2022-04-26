
const { chromium, firefox, webkit} = require('playwright');

for (const browserType of [chromium, firefox, webkit]) { 

  (async () => {
      const browser = await browserType.launch({
        headless: false
      });
      const context = await browser.newContext({
        recordVideo: {
          path: `../../videos/video_${browserType.name()}.webm`,
          dir: `videos`,
          
        }
      });
      const page = await context.newPage();

      await page.goto('http://localhost:3000/login');

      await page.locator('[placeholder="Introduce tu email"]').click();

      await page.locator('[placeholder="Introduce tu email"]').fill('test@test.test');

      await page.locator('[placeholder="Introduce tu contraseña"]').click();

      await page.locator('[placeholder="Introduce tu contraseña"]').fill('Test-test');

      await page.locator('button:has-text("Acceder")').click();

      await page.screenshot({path: `screenshots/image_${browserType.name()}.png`})

      await context.close();
      await browser.close();

  })();
};


 