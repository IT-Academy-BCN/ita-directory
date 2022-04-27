/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const playwright = require('playwright');

(async () => {

  const { chromium, webkit, firefox } = playwright;

  for (const browserType of [chromium, webkit, firefox]) {

    // Launch browser
    const browser = await browserType.launch({
      headless: false
    });
    
    // Create a context
    const context = await browser.newContext({
      recordVideo: {
        dir: `videos`,
        path: `videos/video_${browserType.name()}.webm`,  
      }
    });

    // Create a page 
    const page = await context.newPage();

    await page.goto('http://localhost:3000/login');

    await page.locator('[placeholder="Introduce tu email"]').click();

    await page.locator('[placeholder="Introduce tu email"]').fill('test@test.test');

    await page.locator('[placeholder="Introduce tu contraseña"]').click();

    await page.locator('[placeholder="Introduce tu contraseña"]').fill('Test-test');

    await page.locator('button:has-text("Acceder")').click();

    await page.screenshot({path: `/screenshots/image_${browserType.name()}.png`})

    await context.close();
    await browser.close();

  };
     
})();