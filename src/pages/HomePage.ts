import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page:Page;
    readonly searchBox : Locator;

    constructor(page:Page) {
        this.page = page;

        // Element Locators
        this.searchBox = page.getByRole('combobox', { name: 'Search' });
    }

    // Page Methods
    async gotoURL(){
        await this.page.goto(process.env.YOUTUBE_URL!);
    }

    async searchWitjhKeyword(keyword:string){
        await this.searchBox.click();
        await this.searchBox.fill(keyword);
        await this.searchBox.press('Enter');
    }

}