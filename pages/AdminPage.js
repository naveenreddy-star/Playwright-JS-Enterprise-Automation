const { ActionMethods } = require("../utils/ActionMethods");

class AdminPage{
    constructor(page){
        this.page=page;
        this.action=new ActionMethods(page);
        this.adminNavLink=page.locator("//span[text()='Admin']");
        
    }
    moduleNavigation(name){
        return this.page.locator('span').getByText(name);
    }
    moduleHeader(name){
        return this.page.getByRole('heading', { name: name, exact: true });
    }
    async clickOnModuleNav(name){
        await this.action.clickElement(this.moduleNavigation(name),name);
    }


}
module.exports = {
    AdminPage
};