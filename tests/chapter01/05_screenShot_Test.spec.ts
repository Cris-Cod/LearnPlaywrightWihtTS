import { test, expect } from '@playwright/test';

test('Capture screenshot', async ({ page }) => {
    await page.goto('https://www.youtube.com/@testerstalk');
    
    //element screenshot
    await page.locator('#page-header-container').screenshot({ path: './screenShots/channelHeader.png' });
    
    //Page screenshot
    await page.screenshot({ path: './screenShots/PageScreenShot.png' });

    //Full page screenshot
    await page.screenshot({ path: './screenShots/FullPageScreenShot.png', fullPage: true });
});