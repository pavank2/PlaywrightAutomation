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

   /**
    * Searches for a pattern
    * Verifies results page title and google logo is visible
    */  
   test('Verify Google Search', async ({ page }) => { 
      const landingPage = new LandingPage(page);
      const resultsPage = new SearchResultPage(page);
      await landingPage.searchPattern("Appian");
      //Searching for partial title to avoid German-English conflict
      await expect(page).toHaveTitle(/Appian - Google/); 
    //  await expect(resultsPage.logo).toBeVisible();
    expect(await resultsPage.isLogoVisible()).toBe(true);

    }); 

   /**
    * Searches for a pattern
    * On the results page, clicks on Search filters button and checks if filter Menu comes up
    */  
   test('Verify Search Filter Menu is Visible', async ({ page }) => { 
      const landingPage = new LandingPage(page);
      const resultsPage = new SearchResultPage(page);
      await landingPage.searchPattern("Appian");
      await resultsPage.clickSearchFilter();
      //await expect(resultsPage.filterMenu).toBeVisible();
      expect(await resultsPage.isFilterMenuEnabled()).toBe(true);
   });
}); 

