import { test, expect } from '@playwright/test';
import {ENV} from '../../config/envConfig';
import { LoginPage } from '../../pages/login';

let loginpage,loginpage1;
test('login with valid credentials', async ({ browser }) => {
    // const browser=new chromium.lunch();
     const context=await browser.newContext();
    const context2=await browser.newContext();
    const page=await context.newPage();
    const page1=await context2.newPage()
    loginpage =new LoginPage(page);
    loginpage1 =new LoginPage(page1);
    await loginpage.navigateToLoginPage();
     await loginpage1.navigateToLoginPage();
    console.log(ENV.USERNAME)
    await loginpage.enterUserNameAndPassword(ENV.USERNAME,ENV.PASSWORD);
    await loginpage1.enterUserNameAndPassword(ENV.USERNAME,ENV.PASSWORD);
    await loginpage.clickOnLoginButton()
     await loginpage1.clickOnLoginButton()
    // await page.goto('/');
    // await page.locator('//input[@name="username"]').fill(ENV.USERNAME)
    // await page.locator('//input[@name="password"]').fill(ENV.PASSWORD)y
    // await page.locator('//button').click();

})