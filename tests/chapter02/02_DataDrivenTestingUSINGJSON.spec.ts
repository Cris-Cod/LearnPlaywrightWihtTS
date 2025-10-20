import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testData.json';

type TestDataType = {
    TestDataSet1:{
        Skill1 : string,
        Skill2 : string
    },
    TestDataSet2:{
        Skill1 : string,
        Skill2 : string
    }
}
const typeTestData = testData as TestDataType;

for (const dataSetKey in typeTestData) {
    const skill = typeTestData[dataSetKey as keyof TestDataType];

    test(`Data Driven Testing using JSON: ${skill.Skill1}`, async ({ page }) => {
    await page.goto(process.env.YOUTUBE_URL!);
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill2);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByText(skill.Skill2).first().click();
    await expect(page.locator('#header-description')).toContainText(`${skill.Skill2} ✅`); 
    
    });
}

