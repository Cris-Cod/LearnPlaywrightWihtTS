import { test, expect } from '@playwright/test';

test('Codegen test case', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText('Playwright by Testers Talk ✅').first().click();
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText('Playwright by Tester Talk ✅');
});