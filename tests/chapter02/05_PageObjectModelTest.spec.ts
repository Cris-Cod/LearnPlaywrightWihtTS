import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { Playlist } from '../../src/pages/Playlist';    

test('Page Object Model Test', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Create Object of HomePage
    const homePage = new HomePage(page);
    await homePage.gotoURL();
    await homePage.searchWitjhKeyword('playwright by tester talk');

    // Create Object of ResultPage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist('Playwright by Testers Talk ✅');


    // Create Object of Playlist
    const playlist = new Playlist(page);
    await playlist.validatePagetitle('#1 Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial - YouTube');
});