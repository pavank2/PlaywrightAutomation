/**
 * This spec file has testcases for the Google Search feature
 */
import { test, expect } from '@playwright/test';
import {LandingPage} from '../pages/LandingPage';
import {SearchResultPage} from '../pages/SearchResultPage';
import data from '../data/data.json';


test.describe('Google Search functionality', () => {
   test.beforeEach(async ({ page }) => {
   const landingPage = new LandingPage(page);
   await page.goto(data.common.url); 
   });

   test('Verify Google Search', async ({ page }) => { 
      const landingPage = new LandingPage(page);
      const resultsPage = new SearchResultPage(page);
      await landingPage.searchPattern("Appian");
      //Searching for partial title to avoid German-English conflict
      await expect(page).toHaveTitle(/Appian - Google/); 
      await expect(resultsPage.logo).toBeVisible();
    }); 

   test('Verify Search Filters', async ({ page }) => { 
      const landingPage = new LandingPage(page);
      const resultsPage = new SearchResultPage(page);
      await landingPage.searchPattern("Appian");
      await resultsPage.clickSearchFilter();
      await expect(resultsPage.filterMenu).toBeVisible();
   });
}); 

