import { test, expect } from '@playwright/test';
import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath =path.join(__dirname, '../../test-data/qa/testData.xlsx');

const records = readExcelFile(filePath);


for (const record of records) {

    test(`Data Driven Testing using Excel File : ${record.Skill1}`, async ({ page }) => {
        await page.goto("https://youtube.com");
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByText(`${record.Skill1} ✅`).first().click();
        await expect(page.locator('#header-description')).toContainText(`${record.Skill1} ✅`);
        
    });
}

