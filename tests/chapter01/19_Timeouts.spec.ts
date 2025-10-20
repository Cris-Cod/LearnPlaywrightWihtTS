import { test, expect } from '@playwright/test';

test('Timeouts in playwright', async ({ page }) => {
    test.setTimeout(1* 60 * 1000); // 1 minute timeout for this test only

    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText('Playwright by Testers Talk ✅').first().click({timeout: 5000}); // 5 seconds timeout for this action only
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅', {timeout: 5000}); // 5 seconds timeout for this expect only
    
    //await page.waitForTimeout(60000); // 60 seconds timeout

});