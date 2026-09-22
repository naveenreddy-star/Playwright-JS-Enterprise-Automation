const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
require('dotenv').config();
const { ActionMethods } = require('../utils/ActionMethods')


test.describe('Application Login', () => {

    test.skip('should open Application login page', async ({ page }) => {
        let action = new ActionMethods(page);
        const loginPage = new LoginPage(page);
        await action.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

       
        // await loginPage.clickOnProfile();
        // await loginPage.clickOnlogout();
        



    });

});