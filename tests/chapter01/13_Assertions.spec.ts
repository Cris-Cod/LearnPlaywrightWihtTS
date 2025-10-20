import { test, expect } from '@playwright/test';

test('Assertions in playwright', async ({ page }) => {
    await page.goto('https://www.youtube.com/');


    // Hard assertion

    // visible. editable, enabled, empty
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEmpty();

    // Verify url, title, text, count
    await expect(page).toHaveURL(/.*youtube.*/);
    await expect(page).toHaveTitle(/.*YouTube.*/);
    await expect(page.getByText('Trending')).toHaveText('Trending');
    await expect(page.getByRole('link', { name: 'Home' })).toHaveCount(1);


    // Soft assertion
    await expect.soft(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
    await expect.soft(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable();
    await expect.soft(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled();
    await expect.soft(page.getByPlaceholder('Search', {exact: true}).first()).toBeEmpty();

    
});