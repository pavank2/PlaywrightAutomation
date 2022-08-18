import { expect, Locator, Page } from '@playwright/test';

export class VerificationPage {
  readonly page: Page;
  readonly confirmationMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmationMsg = page.locator("text=Check your email");
  }

  async getConfirmationMsg(){
      return (await this.confirmationMsg.isVisible());
  }
 
}
