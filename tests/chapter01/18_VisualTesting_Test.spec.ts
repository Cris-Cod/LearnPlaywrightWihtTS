import { test, expect } from '@playwright/test';

test('Visual Compraison', async ({ page }) => {
    await page.goto('https://github.com/login');
    await expect(page).toHaveScreenshot('GitHubLogin.png');
    await page.locator('#login_field').fill('testuser');

    await expect(page).toHaveScreenshot('GitHubLogin.png');
});