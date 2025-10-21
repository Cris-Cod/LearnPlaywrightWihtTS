
import { expect, Locator, Page } from "@playwright/test";


export class Playlist {

    readonly page:Page; 

    constructor(page:Page) {
        this.page = page;

        // Element Locators
        
    }

    // Page Methods
    

    async validatePagetitle(title:string){
        await expect(this.page).toHaveTitle(title);
    }

}