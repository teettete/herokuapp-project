const allure = require('@wdio/allure-reporter').default;
const assert = require('assert');

describe('Herokuapp UI test cases', () => {
    it('Successful Login with Valid Credentials', async function () {
        allure.addLabel('testID', 'TC01');
        await browser.url('https://admin:admin@the-internet.herokuapp.com/');
        await $('a[href="/basic_auth"]').click();
        const text = await $('p').getText();
        await expect(text).toContain('Congratulations! You must have the proper credentials.');
    });  
    it('Unsuccessful Login with Invalid Credentials', async function () {
        allure.addLabel('testID', 'TC02');
        await browser.url('https://username:password@the-internet.herokuapp.com/basic_auth');
        const body = await $('body').getText();
        console.log(body);
        await expect(body).toContain('Not authorized');
    });
    it('Click option in Checkbox', async function () {
        allure.addLabel('testID', 'TC03');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/checkboxes"]').click();
        const checkboxes = await $$('#checkboxes input');
        const checkbox1 = checkboxes[0];
        await checkbox1.click();
        const isChecked = await checkbox1.isSelected();
        await expect(isChecked).toBe(true);               //#content > h1
    });
    it('Choose many options in Dropdown', async function () {
        allure.addLabel('testID', 'TC04');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/dropdown"]').click();
        await $('#dropdown option[value="1"]').click();
        const select = await $('#dropdown').getValue();
        await expect(select).toEqual('1');
    });
    it('Change text of button in dynamic controls', async function () {
        allure.addLabel('testID', 'TC05');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/dynamic_controls"]').click();
        const btn = $('#checkbox-example button');
        await btn.waitForDisplayed();
        const btnRe = await btn.getText();
        expect(btnRe).toEqual('Remove');
        await btn.click();
        await browser.pause(3000);
        const btnAd = await btn.getText();
        await expect(btnAd).toEqual('Add');
    });
    it('Display message in dynamic controls', async function () {
        allure.addLabel('testID', 'TC06');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/dynamic_controls"]').click();
        const btn = $('#input-example button');
        await btn.waitForDisplayed();
        await btn.click();
        await browser.pause(3000);
        const message = await $('#message').getText();
        await expect(message).toEqual('It\'s enabled!');
    });
    it('Value is displayed in input field', async function () {
        allure.addLabel('testID', 'TC07');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/inputs"]').click();
        const inputField = $('input[type="number"]');
        await inputField.waitForDisplayed();
        await inputField.setValue('100');
        const value = await inputField.getValue();
        await expect(value).toEqual('100');
    });
    it('Ridirect to home page when clicking button Home in Disappearing Elements', async function () {
        allure.addLabel('testID','TC08');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/disappearing_elements"]').click();
        const homeBtn = await $('a=Home');
        await homeBtn.waitForDisplayed();
        await homeBtn.click();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/');
    });
    it('Check status code message in Status Code', async function(){
        allure.addLabel('testID', 'TC09');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/status_codes"]').click();
        const statusCodeLink = await $('a[href="status_codes/500"]');
        await statusCodeLink.waitForDisplayed();
        await statusCodeLink.click();
        const message = await $('div.example p').getText();
        await expect(message).toContain('This page returned a 500 status code.');
        await expect(message).toContain('For a definition and common list of HTTP status codes, go');
    });
    it('Click Span in Horizontal Slider', async function () {
        allure.addLabel('testID', 'TC10');
        await browser.url('https://the-internet.herokuapp.com/');
        await $('a[href="/horizontal_slider"]').click();
        const slider = await $('input[type="range"]');
        await slider.waitForDisplayed();
        for (let i = 0; i < 10; i++) {
            await slider.addValue('\uE014');
            await browser.pause(100); 
        }
        const valueText = await $('#range').getText();
        await expect(valueText).toEqual('5');
    });
    it('Add three elements in Add/Remove Elements', async function () {
        allure.addLabel('testID', 'TC11');
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        const btn = await $('=Add Element'); // Lấy element trước
        await btn.waitForDisplayed(); 
        await btn.click();
        await btn.click();
        await btn.click();  
        const elements = await $$('#elements > button');
        await expect(elements).toHaveLength(3);
    });
    it('Scroll to the bottom of the page', async function () {
        allure.addLabel('testID', 'TC12');
        await browser.url('https://the-internet.herokuapp.com/floating_menu');
        await $('#content').isDisplayed();
        const scrollToBottom = await $('#page-footer');
        await scrollToBottom.scrollIntoView();
        const isDisplayed = await scrollToBottom.isDisplayed();
        await expect(isDisplayed).toBe(true);
    });
    it('Load message in Notification Message', async function (){
        allure.addLabel('testID', 'TC13');
        await browser.url('https://the-internet.herokuapp.com/notification_message_rendered');
        const message = await $('#content > div > p > a');
        await message.waitForDisplayed();
        await message.click();
        await $('#flash').isDisplayed();
    });
    it('Show user info on hover', async function () {
        allure.addLabel('testID', 'TC14');
        await browser.url('https://the-internet.herokuapp.com/hovers');
        const figure = await $('.figure')
        await figure.$('img').moveTo();       
        const caption = await figure.$('.figcaption');
        await caption.waitForDisplayed();  
        const info = await caption.getText();
        expect(info).toContain('user1');
    });
    it('Check bottom frame is existed in Nested Frames', async function () {
        allure.addLabel('testID', 'TC15');
        await browser.url('https://the-internet.herokuapp.com/nested_frames');
        const bottomFrame = await $('frame[name="frame-bottom"]');
        expect(await bottomFrame.isExisting()).toBe(true);
    });
    it('Check image is displayed in Broken Images', async function () {
        allure.addLabel('testID', 'TC16');
        await browser.url('https://the-internet.herokuapp.com/broken_images');
        const img = await $('div.example img');
        const result = await img.isDisplayed();
        expect(result).toBe(true);
    });
    it('Verify page title in A/B Testing', async function () {
        allure.addLabel('testID', 'TC17');
        await browser.url('https://the-internet.herokuapp.com/abtest');
        const title = await $('h3').getText();
        expect(title).toContain('A/B Test');
    });
    it('Check table content exists in Tables', async function () {
        allure.addLabel('testID', 'TC18');
        await browser.url('https://the-internet.herokuapp.com/tables');
        const table = await $('#table1');
        const result = await table.isDisplayed();
        expect(result).toBe(true);
    });
    it('Check login form is present in Form Authentication', async function () {
        allure.addLabel('testID', 'TC19');
        await browser.url('https://the-internet.herokuapp.com/login');
        const username = await $('#username');
        const password = await $('#password');
        const loginBtn = await $('button[type="submit"]');
        expect(await username.isDisplayed()).toBe(true);
        expect(await password.isDisplayed()).toBe(true);
        expect(await loginBtn.isDisplayed()).toBe(true);
    });
    it('Open context menu and get alert in Context menu', async function () {
        allure.addLabel('testID', 'TC20');
        await browser.url('https://the-internet.herokuapp.com/context_menu');
        const box = await $('#hot-spot');
        await box.click({ button: 'right' }); // Right click
        const alert = await browser.getAlertText();
        expect(alert).toContain('You selected a context menu');
        await browser.acceptAlert();
    });
});