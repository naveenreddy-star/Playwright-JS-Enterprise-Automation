export class LoginPage{
    
    constructor(page){
        this.page=page;
        this.usernameInput=page.locator('//input[@name="username"]');
        this.passwordInput=page.locator('//input[@name="password"]');
        this.loginButton=page.locator('//button');
        this.userProfile=page.locator('//p[@class="oxd-userdropdown-name"]');
        this.logoutButton=page.locator('//a[text()="Logout"]')
    }

    async navigateToLoginPage()
    {
        await this.page.goto('/')

    }
    async enterUserNameAndPassword(username,password)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }
    async clickOnLoginButton(){
        await this.loginButton.click();
    }
    async logout(){
        await this.userProfile.click();
        await this.logoutButton.click();
    }
}