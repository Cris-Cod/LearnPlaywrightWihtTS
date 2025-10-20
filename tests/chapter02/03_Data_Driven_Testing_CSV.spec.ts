import { test, expect } from '@playwright/test';
import {parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Skill1 : string,
    Skill2 : string
}

const csv =  fs.readFileSync(path.join(__dirname, '../../test-data/qa/testData.csv'), 'utf-8');

const records = parse(csv, {
    columns: (header: string[]) => header.map(h => h.trim()),
    skip_empty_lines: true
}) as TestRecords[];

//eliminate rows with empty fields
const validRecords = records.filter((r,i) =>{
    const ok = typeof (r as any).Skill1 === 'string' && (r as any).Skill1.trim() !== '';
    if (!ok) console.warn(`Dropping CSV row ${i} because Skill1 is missing:`, r);
    return ok;
})

for (const [i, record] of validRecords.entries()) {
    const rawSkill = (record as any).Skill1;
    if (typeof rawSkill !== 'string' || rawSkill.trim() === '') {
        console.warn(`Skipping CSV row ${i} because Skill1 is missing or empty:`, record);
        continue;
    }
    const skill = rawSkill.trim();
    const title = `Read csv File: ${skill} (${i})`;

    test(title, async ({ page }) => {
        await page.goto(process.env.YOUTUBE_URL!);
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(skill);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByText(skill).first().click();
        await expect(page.locator('#header-description')).toContainText(`${skill} ✅`);
    });
}