const allure = require('@wdio/allure-reporter').default;
const assert = require('assert');
const HomePage = require('../pageobjects/tdthomepage/home.page.js');

describe('Homepage Tests', () => { 
    it('Successful open Homepage', async () => {
        const homePage = new HomePage();
        await homePage.openUrl();
        expect(await browser.getUrl()).toContain('tdtu.edu.vn');
    })
    it('Successful searching keyword on search bar', async () => {
        const homePage = new HomePage();
        await homePage.openUrl();
        await homePage.clickBtnSearch();
        await homePage.searching.search('TDTU');

        await browser.pause(20000);

        const results = await homePage.searching.searchContent;
        await expect(results.length).toBeGreaterThan(0);
    });
});