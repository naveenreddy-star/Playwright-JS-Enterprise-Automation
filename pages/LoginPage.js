const { ActionMethods } = require("../utils/ActionMethods");
export class LoginPage {

    constructor(page) {
        this.page = page;
        this.action = new ActionMethods(page);
        this.page=page;
        this.usernameInput=page.locator('//input[@name="username"]');
        this.passwordInput=page.locator('//input[@name="password"]');
        this.loginButton=page.locator('//button');
        this.userProfile=page.locator('//p[@class="oxd-userdropdown-name"]');
        this.logoutButton=page.locator('//a[text()="Logout"]')
    }


    async open() {
        await this.page.goto('/');
    }

    async clickLogin() {
        await this.action.clickElement(
            this.loginText,
            'Login button'
        );
    }
    async enterUserName(username) {
        this.usernameInput.fill(username);
    }
    async login(username, password) {

        await this.action.fillText(
            this.usernameInput,
            username,
            'Username textbox'
        );

        await this.action.fillText(
            this.passwordInput,
            password,
            'Password textbox'
        );

        await this.action.clickElement(
            this.loginButton,
            'Login button'
        );
    }
    async getSearchAppearancecount() {
        return await this.action.getTextContent(this.searchAppearances, 'Search Appearances')
    }
   
    async isLoggedIn() {



        try {
            await this.action.waitForElement(this.userProfile, "User Profile", {
                state: 'visible',
                timeout: 5000
            })

            return true;

        } catch {

            return false;
        }
    }
    async clickOnProfile(){
        await this.action.clickElement(this.userProfile,"User Profile Icon");
    }
   async clickOnlogout(){
    await this.action.clickElement(this.logoutButton,"logout button")
   }

}
