/**
 * This class has elements and functions for the Landing Page
 * 
 */
import { expect, Locator, Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly cookieReject: Locator;
  readonly searchBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieReject = page.locator("button:has-text('Alle ablehnen'),button:has-text('Reject all')");
    this.searchBar = page.locator("[name=q]");
  }

  async searchPattern(pattern: string) {
    await this.cookieReject.click();
    await this.searchBar.type(pattern);
    await this.page.keyboard.press("Enter");
  }

}