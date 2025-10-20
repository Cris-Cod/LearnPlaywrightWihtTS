import { test, expect } from '@playwright/test';

const searchKeywords = ['playwright by testers talk', 'Cypress by testers talk', 'API Testing by testers talk'];


for(const searchKeyword of searchKeywords) {

    test(`Parametrizar test en playwrigth ${searchKeyword}`, async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText(searchKeyword).first().click();
    await expect(page.getByRole('link', { name: searchKeyword })).toBeVisible();
    await expect(page.locator('#header-description')).toContainText(`${searchKeyword} ✅`);
    });

}

