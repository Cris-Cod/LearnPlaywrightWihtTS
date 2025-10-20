import { test, expect } from '@playwright/test';

test('Codegen test case', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    await page.getByRole('button', {name: 'Create new account'}).click();
    
    // Select using value
    await page.getByLabel('Month').selectOption('3')

    // Select using visible text
    await page.getByLabel('Month').selectOption('Aug')

    //Validete all options
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
});