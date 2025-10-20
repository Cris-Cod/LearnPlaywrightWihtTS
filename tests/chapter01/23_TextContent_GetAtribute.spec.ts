import { test, expect } from '@playwright/test';

test('Get Text & Get Attribute', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN/');
    
    const name = await page.locator('[itemprop="name"]').textContent();
    const finalName = name?.trim();
    console.log(`Name of the user is: ${finalName}`);

    const name1 = await page.locator('[itemprop="name"]').innerText();
    const finalName1 = name?.trim();
    console.log(`Name of the user is: ${finalName1}`);
    expect(finalName1).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-link');
    console.log(`Attribute value is: ${attributeValue}`);
});
