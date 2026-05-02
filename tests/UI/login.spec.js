import { test, expect } from '@playwright/test';
import {ENV} from '../../config/envConfig';
import { LoginPage } from '../../pages/login';

let loginpage;
test('login with valid credentials', async ({ browser }) => {
    // const browser=new chromium.lunch();
     const context=await browser.newContext();
    const page=await context.newPage();
    loginpage =new LoginPage(page);
    await loginpage.navigateToLoginPage();
    await loginpage.enterUserNameAndPassword(ENV.USERNAME,ENV.PASSWORD);
    await loginpage.clickOnLoginButton()
   

})