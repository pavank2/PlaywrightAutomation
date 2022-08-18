import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly terms: Locator;
  readonly subscribe: Locator;
  readonly submitBtn: Locator;
  readonly nameError: Locator;
  readonly passwordError: Locator;
  readonly emailError : Locator;
  readonly termsError : Locator;
  readonly shortPasswordError: Locator;
  readonly greatPassword : Locator;
  readonly weakPassword : Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator("text=Name");
    this.email = page.locator("text=Work email");
    this.password = page.locator("text=Password 8+ characters");
    this.terms = page.locator("label[class='mr-checkbox-1__check ']").locator('visible=true');
    this.subscribe = page.locator("label[class='mr-checkbox-1__check']").locator('visible=true');
    this.submitBtn = page.locator("text=Get started now");
    this.nameError = page.locator("text=Please enter your name.").locator('visible=true');
    this.passwordError = page.locator("text=Please enter your password.").locator('visible=true');
    this.emailError = page.locator("text=The email you entered is incorrect.").locator('visible=true');
    this.termsError = page.locator("text=Please agree with the Terms to sign up.").locator('visible=true');
    this.shortPasswordError = page.locator("text=Please use 8+ characters for secure password.").locator('visible=true');
    this.greatPassword = page.locator("text=Great password").locator('visible=true');
    this.weakPassword = page.locator("text=Weak password").locator('visible=true');
   
  }

  
  async enterCredentials(name,user, pass){
    await this.name.type(name);
    await this.email.type(user);
    await this.password.type(pass);
  };

  async clickTermsConditions() {
    await this.terms.click();
  }

  async clickSubscribe() {
    await this.subscribe.click();
  }

  async clickSubmit() {
    await this.submitBtn.click();
  };

  async nameErrorVisible(){
    return (await this.nameError.isVisible());
}
async passwordErrorVisible(){
    return (await this.passwordError.isVisible());
}

async emailErrorVisible(){
    return (await this.emailError.isVisible());
}

async termsErrorVisible(){
    return (await this.termsError.isVisible());
}

async shortPasswordErrorVisible(){
 
   await this.shortPasswordError.waitFor();
    return (await this.shortPasswordError.isVisible());
}

async greatPasswordVisible(){
  await this.greatPassword.waitFor();
    return (await this.greatPassword.isVisible());
}

async weakPasswordVisible(){
  await this.weakPassword.waitFor();

    return (await this.weakPassword.isVisible());
}

}