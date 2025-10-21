import { Locator, Page } from "@playwright/test";
import { link } from "fs";

export class ResultPage {

    readonly page:Page; 

    constructor(page:Page) {
        this.page = page;

        // Element Locators
        
    }

    // Page Methods
    

    async clickOnPlaylist(link:string){
        await this.page.getByRole('link', {name : link}).first().click();
    }

}