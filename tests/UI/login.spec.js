import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import dotenv from 'dotenv';

dotenv.config();

let loginpage;

test.describe('Verify Login Functionalities', () => {

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
    });

    test('Login with invalid credentials', async ({ page }) => {

        await loginpage.navigateToLoginPage();

        await loginpage.enterUserNameAndPassword(
           "naveen",
            "PASSWORD@123"
        );

        await loginpage.clickOnLoginButton();

        await expect(page.locator('.oxd-alert-content-text'))
            .toContainText('Invalid credentials');
    });

    test('Login with valid credentials', async ({ page }) => {

        await loginpage.navigateToLoginPage();

        await loginpage.enterUserNameAndPassword(
            process.env.USERNAME,
            process.env.PASSWORD
        );

        await loginpage.clickOnLoginButton();

        await expect(page).not.toHaveURL(/login/);
    });

    test('Logout from application', async ({ page }) => {

        await loginpage.navigateToLoginPage();

        await loginpage.enterUserNameAndPassword(
            process.env.USERNAME,
            process.env.PASSWORD
        );

        await loginpage.clickOnLoginButton();

        await loginpage.logout();

        await expect(page).toHaveURL(/login/);
    });

});