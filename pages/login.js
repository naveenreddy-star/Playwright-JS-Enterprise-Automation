export class LoginPage{
    
    constructor(page){
        this.page=page;
        this.usernameInput=page.locator('//input[@name="username"]');
        this.passwordInput=page.locator('//input[@name="password"]');
        this.loginButton=page.locator('//button');
    }

    async navigateToLoginPage()
    {
        await this.page.goto('/')

    }
    async enterUserNameAndPassword(username,password)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password)
        await this.loginButton
    }
    async clickOnLoginButton(){
        await this.loginButton.click();
    }
}