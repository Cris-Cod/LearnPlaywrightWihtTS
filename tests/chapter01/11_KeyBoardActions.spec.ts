import { test, expect } from '@playwright/test';

test('Keyboard actions in playwright', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search', {exact : true}).first().click();
    await page.getByLabel('Search', {exact : true}).first().fill('playwright by testers talk');
    await page.getByLabel('Search', {exact : true}).first().press('Enter');
    
});