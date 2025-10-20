// Import xlsx
import * as EXCEL from 'xlsx';
import fs from 'fs';

// Define test data structure
interface TestRecord{
    Skill1: string,
    Skill2: string
}

// Create method to read Excel file

export function readExcelFile(filePath: string){
     // Read the excel file
    const file = fs.readFileSync(filePath);


     // parse into workbook
    const workbook = EXCEL.read(file);

     // Get the first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert sheet to JSON
    const rawData : any[] = EXCEL.utils.sheet_to_json(sheet, {header:1});
    
    // convert raw data to TestRecord
    const records :TestRecord[] = rawData.slice(1).map((column: any) => ({
        Skill1 : column[0],
        Skill2 : column[1]
    }))

    return records;
}