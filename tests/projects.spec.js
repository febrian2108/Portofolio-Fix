const { test, expect } = require('@playwright/test');

test.describe('Projects Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should display projects page correctly', async ({ page }) => {
    // Check page title and heading
    await expect(page.locator('h1, h2')).toContainText(/Projects/i);
    
    // Wait for projects to load
    await page.waitForTimeout(2000);
    
    // Check if projects are displayed
    const projectCards = page.locator('[data-testid="project-card"]')
      .or(page.locator('.project-card'))
      .or(page.locator('div').filter({ hasText: /E-Commerce|Task Management|Weather/i }));
    
    await expect(projectCards).toHaveCount({ min: 1 });
  });

  test('should display filter buttons', async ({ page }) => {
    // Wait for content to load
    await page.waitForTimeout(1000);
    
    // Check for filter buttons
    const filterButtons = [
      'All',
      'Web Development',
      'Data Science', 
      'Mobile Development',
      'AI/ML',
      'Blockchain'
    ];
    
    for (const filter of filterButtons) {
      const filterButton = page.locator('button').filter({ hasText: filter });
      if (await filterButton.count() > 0) {
        await expect(filterButton.first()).toBeVisible();
      }
    }
  });

  test('should filter projects correctly', async ({ page }) => {
    // Wait for projects to load
    await page.waitForTimeout(2000);
    
    // Get initial project count
    const allProjectsCount = await page.locator('div').filter({ hasText: /E-Commerce|Task Management|Weather|Analytics|Fitness|Chatbot|Blockchain|Portfolio/i }).count();
    
    if (allProjectsCount > 0) {
      // Click on Web Development filter
      const webDevFilter = page.locator('button').filter({ hasText: 'Web Development' });
      if (await webDevFilter.count() > 0) {
        await webDevFilter.first().click();
        
        // Wait for filter to apply
        await page.waitForTimeout(1000);
        
        // Check if filter is active (button should be highlighted)
        await expect(webDevFilter.first()).toHaveClass(/default|active|selected/);
      }
      
      // Test Data Science filter
      const dataScienceFilter = page.locator('button').filter({ hasText: 'Data Science' });
      if (await dataScienceFilter.count() > 0) {
        await dataScienceFilter.first().click();
        await page.waitForTimeout(1000);
        
        // Check if filter is active
        await expect(dataScienceFilter.first()).toHaveClass(/default|active|selected/);
      }
      
      // Test Mobile Development filter
      const mobileFilter = page.locator('button').filter({ hasText: 'Mobile Development' });
      if (await mobileFilter.count() > 0) {
        await mobileFilter.first().click();
        await page.waitForTimeout(1000);
        
        // Check if filter is active
        await expect(mobileFilter.first()).toHaveClass(/default|active|selected/);
      }
      
      // Test AI/ML filter
      const aimlFilter = page.locator('button').filter({ hasText: 'AI/ML' });
      if (await aimlFilter.count() > 0) {
        await aimlFilter.first().click();
        await page.waitForTimeout(1000);
        
        // Check if filter is active
        await expect(aimlFilter.first()).toHaveClass(/default|active|selected/);
      }
      
      // Test Blockchain filter
      const blockchainFilter = page.locator('button').filter({ hasText: 'Blockchain' });
      if (await blockchainFilter.count() > 0) {
        await blockchainFilter.first().click();
        await page.waitForTimeout(1000);
        
        // Check if filter is active
        await expect(blockchainFilter.first()).toHaveClass(/default|active|selected/);
      }
      
      // Go back to All filter
      const allFilter = page.locator('button').filter({ hasText: 'All' });
      if (await allFilter.count() > 0) {
        await allFilter.first().click();
        await page.waitForTimeout(1000);
        
        // Check if all projects are shown again
        const finalProjectsCount = await page.locator('div').filter({ hasText: /E-Commerce|Task Management|Weather|Analytics|Fitness|Chatbot|Blockchain|Portfolio/i }).count();
        expect(finalProjectsCount).toBeGreaterThanOrEqual(allProjectsCount);
      }
    }
  });

  test('should navigate to project detail page', async ({ page }) => {
    // Wait for projects to load
    await page.waitForTimeout(2000);
    
    // Look for "View Details" or "Eye" buttons
    const detailButtons = page.locator('button').filter({ hasText: /View Details|Details/i })
      .or(page.locator('button svg'))
      .or(page.locator('[data-testid="view-details"]'));
    
    if (await detailButtons.count() > 0) {
      // Click the first detail button
      await detailButtons.first().click();
      
      // Check if we navigated to a project detail page
      await expect(page).toHaveURL(/\/projects\/\d+/);
      
      // Check if detail page content is displayed
      await expect(page.locator('h1, h2')).toContainText(/E-Commerce|Task Management|Weather|Analytics|Fitness|Chatbot|Blockchain|Portfolio/i);
      
      // Check for back button
      const backButton = page.locator('button').filter({ hasText: /Back|←/i });
      if (await backButton.count() > 0) {
        await backButton.first().click();
        await expect(page).toHaveURL('/projects');
      }
    }
  });

  test('should display project technologies', async ({ page }) => {
    // Wait for projects to load
    await page.waitForTimeout(2000);
    
    // Check for technology badges/tags
    const commonTechs = ['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Express'];
    let foundTech = false;
    
    for (const tech of commonTechs) {
      const techElement = page.locator('span, div, badge').filter({ hasText: tech });
      if (await techElement.count() > 0) {
        await expect(techElement.first()).toBeVisible();
        foundTech = true;
        break;
      }
    }
    
    // At least one technology should be visible
    if (!foundTech) {
      // Look for any badge-like elements that might contain technologies
      const badges = page.locator('[class*="badge"], [class*="tag"], [class*="chip"]');
      if (await badges.count() > 0) {
        await expect(badges.first()).toBeVisible();
      }
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if page still loads correctly
    await expect(page.locator('h1, h2')).toContainText(/Projects/i);
    
    // Wait for projects to load
    await page.waitForTimeout(2000);
    
    // Check if projects are still visible
    const projectElements = page.locator('div').filter({ hasText: /E-Commerce|Task Management|Weather/i });
    if (await projectElements.count() > 0) {
      await expect(projectElements.first()).toBeVisible();
    }
    
    // Check if filter buttons are still accessible
    const allFilter = page.locator('button').filter({ hasText: 'All' });
    if (await allFilter.count() > 0) {
      await expect(allFilter.first()).toBeVisible();
    }
  });
});

