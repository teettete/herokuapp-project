const allure = require('@wdio/allure-reporter').default;
const assert = require('assert');
const LoginPage = require('../pageobjects/login.page');


describe('Login Test', () => {
    it('Successful login with valid credentials (assert)', async () => {
        const loginPage = new LoginPage();
        await loginPage.openUrl();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        assert.ok(await loginPage.successMessage.isDisplayed());
    });
    it('Successful login with valid credentials (expect)', async () => {
        const loginPage = new LoginPage();
        await loginPage.openUrl();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(await loginPage.successMessage).toBeDisplayed();
    });
    it('Failed login with invalid credentials', async () => {
        const loginPage = new LoginPage();
        await loginPage.openUrl();
        await loginPage.login('admin', 'admin');
        expect(await loginPage.errorMessage).toBeDisplayed();
    });
});