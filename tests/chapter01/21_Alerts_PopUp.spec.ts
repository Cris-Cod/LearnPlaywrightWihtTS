import { test, expect } from '@playwright/test';

test('Popups', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // Handle alert popup
    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Dialog message: ${dialog.message()}`);
    });
    await page.getByText('See an example alert', {exact: true}).click();


});


test('Alerts and popups', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // Handle alert popup
    page.once('dialog', dialog => {
        //dialog.accept();
        dialog.dismiss();
        console.log(`Dialog message: ${dialog.message()}`);
    });
    await page.getByText('See a sample confirm', {exact: true}).click();

});

test('Prompt popups', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // Handle alert popup
    page.once('dialog', async(dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept('Playwright Test');
    });
    await page.getByText('See a sample prompt', {exact: true}).click();

});