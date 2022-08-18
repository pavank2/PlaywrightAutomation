import { expect, Locator, Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly signUpBtn: Locator;
  readonly coreConceptsLink: Locator;
  readonly tocList: Locator;
  readonly name: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpBtn = page.locator("a[href='/signup/']").locator('visible=true');
    this.name = page.locator("text=Name");   
  }

  async clickSignUp() {
    await this.signUpBtn.click();
 
  }

}