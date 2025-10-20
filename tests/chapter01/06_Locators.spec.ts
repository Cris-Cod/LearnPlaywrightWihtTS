import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    //await page.goto('https://github.com/BakkappaN/');

    // getByRole
    //await page.getByRole('link', {name : 'Sign in'}).click();

    // getByLabel
    //await page.getByLabel('Homepage', {exact: true}).first().click();

    // getByAltText
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    // getByTestId
    //await page.getByTestId('repositories').first().click();

    // getByText
    //await page.getByText('Sign Up').click();


    await page.goto('https://www.youtube.com/@testerstalk');

    // getByPlaceHolder
    //await page.getByPlaceholder('Search').fill('playwright by tester talk');

    // Xpath
    //await page.locator('//input[@name="search_query"]').fill('playwright by tester talk');

    //CSS
    //await page.locator('input[name="search_query"]').fill('playwright by tester talk');

    //Combining locators
    await page.locator('input[name="search_query"]').fill('playwright by tester talk');
    await page.locator('input[name="search_query"]').press('Enter');
    await page.locator('ytd-video-renderer').first().click();

    // getByTitle

});