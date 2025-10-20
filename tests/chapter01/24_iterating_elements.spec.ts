import { test, expect } from '@playwright/test';

test('Iteriting Elements', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN/');
    
    const repositorieLinks = await page.$$('.repo');
    for(const repo of repositorieLinks){
        const text =await repo.textContent();
        console.log(`text from 1st for loop: ${text}`);
    }

    console.log('---------------------------');

    for(let i=0; i<repositorieLinks.length; i++){
        const text = await repositorieLinks[i].textContent();
        console.log(`text from 2nd for loop: ${text}`);
    }

    console.log('---------------------------');

    const repositorieLinks2 = await page.locator('.repo');
    const count = await repositorieLinks2.count();
    for(let i=0; i<count; i++){
        const text = await repositorieLinks2.nth(i).textContent();
        console.log(`text from 3rd for loop: ${text}`);
    }
});