import { test, expect } from '@playwright/test';

test.beforeAll(async() => {
    console.log('Before all tests');
});

test.beforeEach(async({page}) => {
    console.log('Before each test');
    await page.goto('https://www.youtube.com/');
});

test.afterEach(async() => {
    console.log('After each test');
});

test.afterAll(async() => {
    console.log('After all tests');
});

test('Test 1', async ({ page }) => {
    console.log('Test1 Execution started...');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText('Playwright by Testers Talk ✅').first().click();
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
});

test('Test 2', async ({ page }) => {
    console.log('Test2 Execution started...');
    //await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText('Playwright by Testers Talk ✅').first().click();
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
});