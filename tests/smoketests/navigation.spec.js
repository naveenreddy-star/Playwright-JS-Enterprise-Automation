const{test,expect}=require('@playwright/test');
const {AdminPage}=require('../../pages/AdminPage');
const { ActionMethods } = require("../../utils/ActionMethods");

test.describe('Dashboard tests',()=>{

test('Verify all navigations',async({page})=>{
let adminpage=new AdminPage(page);
let action=new ActionMethods(page);
await action.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
// await adminpage.clickOnModuleNav('Admin')
// await expect(adminpage.moduleHeader(Admin)).toBeVisible();
await adminpage.clickOnModuleNav('Admin')
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Admin')).toBeVisible();


await adminpage.clickOnModuleNav('PIM')
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('PIM')).toBeVisible()

await adminpage.clickOnModuleNav('Leave')
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Leave')).toBeVisible()

await adminpage.clickOnModuleNav('Time')
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Time')).toBeVisible()

await adminpage.clickOnModuleNav('Recruitment')
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Recruitment')).toBeVisible()

await adminpage.clickOnModuleNav('My Info');
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('PIM')).toBeVisible();

await adminpage.clickOnModuleNav('Performance');
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Performance')).toBeVisible()

await adminpage.clickOnModuleNav('Dashboard');
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Dashboard')).toBeVisible();

await adminpage.clickOnModuleNav('Directory');
await page.waitForLoadState('domcontentloaded');
// await expect(adminpage.moduleHeader('Directory')).toBeVisible()

// await adminpage.clickOnModuleNav('Maintenance');
// await page.waitForLoadState('domcontentloaded');
// await expect(await adminpage.moduleHeader('Maintenance')).toBeVisible()

await adminpage.clickOnModuleNav('Claim');
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Claim')).toBeVisible()

await adminpage.clickOnModuleNav('Buzz');
await page.waitForLoadState('domcontentloaded');
await expect(await adminpage.moduleHeader('Buzz')).toBeVisible()

})
})