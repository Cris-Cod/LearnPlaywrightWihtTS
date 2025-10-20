import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await test.step('go to playwright.dev', async () => {
    await page.goto('https://playwright.dev/');
  });
  
   // Click the get started link.
  await test.step('click get started link', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  // Expects page to have a heading with the name of Installation.
  await test.step('check installation heading is visible', async () => {
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});
