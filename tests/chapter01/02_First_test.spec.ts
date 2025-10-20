// Import playwright module
import { test, expect } from '@playwright/test';

//Wrtie a test
test('Validate Youtube search functionality', async ({ page }) => {
    //Go to Url
    await page.goto('https://www.google.com/');

    // Seacrh with keywords
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Tester Talk' }).first().click();

    // validate page title
    await expect(page).toHaveTitle('Playwright by Tester Talk - YouTube');

});




