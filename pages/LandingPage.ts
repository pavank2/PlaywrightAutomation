/**
 * This class has elements and functions for the Landing Page
 */
import { expect, Locator, Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly cookieReject: Locator;
  readonly searchBar: Locator;
  readonly email: Locator;
  readonly searchButton: Locator;
  readonly luckyButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.cookieReject = page.locator("button:has-text('Alle ablehnen'),button:has-text('Reject all')");
    this.searchBar = page.locator("[name=q]");
    this.luckyButton = page.locator("[name=btnI] >> visible=true").first();
  }

  async searchPattern() {
    await this.cookieReject.click();
    await this.searchBar.type("Appian");
    await this.page.keyboard.press('Enter');
 
  }

}