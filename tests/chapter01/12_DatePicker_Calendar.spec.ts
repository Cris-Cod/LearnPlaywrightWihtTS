import { test, expect } from '@playwright/test';

test('Selecting date value in playwright', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe = page.frameLocator('.demo-frame');

    // Hard coded date
    //await iframe.locator('.hasDatepicker').fill('10/10/2023');
    
    // Dynamic date
    //await iframe.locator('.hasDatepicker').click();
    //await iframe.locator('.ui-datepicker-today').click();


    // past date
    //await iframe.locator('.hasDatepicker').click();
    //await iframe.locator('.ui-datepicker-prev').click();
    //await iframe.locator('text=29').click();

    // future date
    await iframe.locator('.hasDatepicker').click();
    await iframe.locator('.ui-datepicker-next').click();
    await iframe.locator('text=15').click();
    
    
});