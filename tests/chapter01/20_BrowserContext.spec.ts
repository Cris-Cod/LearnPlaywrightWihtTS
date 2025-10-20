import { test, expect } from '@playwright/test';

test('Multiple Browser/tabs in playwright', async ({ page, browser }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText('Playwright by Testers Talk ✅').first().click();
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');

    // New Browser session
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://www.youtube.com/');
    await page2.getByRole('combobox', { name: 'Search' }).click();
    await page2.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page2.getByText('Playwright by Testers Talk ✅').first().click();
    await expect(page2.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page2.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');


    // New tab
    const newTab = await context2.newPage();
    await newTab.goto('https://www.youtube.com/');
    await newTab.getByRole('combobox', { name: 'Search' }).click();
    await newTab.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');
});