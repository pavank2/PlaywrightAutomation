/**
 * This class has elements and functions for the Search Results Page
 */
import { expect, Locator, Page } from '@playwright/test';

export class SearchResultPage {
  readonly page: Page;
  readonly searchFilter: Locator;
  readonly logo: Locator
  readonly filterMenu: Locator;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator("//img[contains(@src, '/logos/doodles/')]");
   
    this.searchFilter = page.locator("#hdtb-tls");
    this.navigation = page.locator("#hdtb");
    //Covering for weird google incognito mode which shows results in German though my language is English
   this.filterMenu = page.locator("#top_nav").locator('div:has-text("Beliebige Sprache"),div:has-text("Any language")').locator("visible=true");
   

  }

  async clickSearchFilter(){
     await this.searchFilter.click();
  }
  
}
