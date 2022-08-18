import { test, expect } from '@playwright/test';
import {LandingPage} from '../pages/LandingPage';
import {LoginPage} from '../pages/LoginPage';
import {VerificationPage} from '../pages/VerificationPage';
import data from '../data/data.json';
import {Helper} from '../util/helpers';

test.describe('Register feature', () => {
   test.beforeEach(async ({ page }) => {
   const landingPage = new LandingPage(page);
   await page.goto(data.common.url);
   await landingPage.clickSignUp();
     
   });

test('Register with correct credentials', async ({ page }) => {
  
   const loginPage = new LoginPage(page);
   const verificationPage = new VerificationPage(page);
   let utils = new Helper();
   let email = utils.constructEmailString();
   await loginPage.enterCredentials(data.register.name,email, data.register.password);
   await loginPage.clickTermsConditions();
   await loginPage.clickSubmit();
   expect(await verificationPage.getConfirmationMsg()).toBe(true);
});

test('Register with blank Name Field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let utils = new Helper();
    let email = utils.constructEmailString();
    await loginPage.enterCredentials("",email, data.register.password);
    await loginPage.clickTermsConditions();
    await loginPage.clickSubmit();
    expect(await loginPage.nameErrorVisible()).toBe(true);
   });

test('Register with blank Password Field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let utils = new Helper();
    let email = utils.constructEmailString();
    await loginPage.enterCredentials(data.register.name,email, "");
    await loginPage.clickTermsConditions(); 
    await loginPage.clickSubmit();
    expect(await loginPage.passwordErrorVisible()).toBe(true);
   });

test('Register with wrong format emailId', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterCredentials(data.register.name,data.register.email, data.register.password);   //email does not contain @domain.com
    await loginPage.clickTermsConditions(); 
    await loginPage.clickSubmit();
    expect(await loginPage.emailErrorVisible()).toBe(true);
   });

test('Register without accepting Terms', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let utils = new Helper();
    let email = utils.constructEmailString();
    await loginPage.enterCredentials(data.register.name,email, data.register.password);   
    // await loginPage.clickTermsConditions();   // Terms not accepted 
    await loginPage.clickSubmit();
    expect(await loginPage.termsErrorVisible()).toBe(true);
   });

test('Register with short Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let utils = new Helper();
    let email = utils.constructEmailString();
    await loginPage.enterCredentials(data.register.name,email, data.register.shortPassword);   
    await loginPage.clickTermsConditions();   
    await loginPage.clickSubmit();
    expect(await loginPage.shortPasswordErrorVisible()).toBe(true);
   });

test('Check for great Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let utils = new Helper();
    let email = utils.constructEmailString();
    await loginPage.enterCredentials(data.register.name,email, data.register.greatPassword); 
    expect(await loginPage.greatPasswordVisible()).toBe(true);   
   });

test('Check for Weak Password', async ({ page }) => {
      const loginPage = new LoginPage(page);
      let utils = new Helper();
      let email = utils.constructEmailString();
      await loginPage.enterCredentials(data.register.name,email, data.register.weakPassword);
      expect(await loginPage.weakPasswordVisible()).toBe(true);
     });

}); 

