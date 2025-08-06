const { test, expect } = require('@playwright/test');

test.describe('Project Detail Page Tests', () => {
  test('should display project detail page correctly', async ({ page }) => {
    // Navigate directly to a project detail page
    await page.goto('/projects/1');
    
    // Check if page loads correctly
    await expect(page.locator('h1')).toContainText(/E-Commerce Platform|Task Management|Weather|Analytics|Fitness|Chatbot|Blockchain|Portfolio/i);
    
    // Check for back button
    const backButton = page.locator('button').filter({ hasText: /Back|←/i });
    await expect(backButton).toBeVisible();
    
    // Check for project description
    await expect(page.locator('p, div').filter({ hasText: /description|about|project/i })).toHaveCount({ min: 1 });
  });

  test('should display project technologies section', async ({ page }) => {
    await page.goto('/projects/1');
    
    // Wait for content to load
    await page.waitForTimeout(1000);
    
    // Check for technologies section
    await expect(page.locator('h2, h3').filter({ hasText: /Technologies|Tech|Tools/i })).toBeVisible();
    
    // Check for technology cards or badges
    const commonTechs = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Python'];
    let foundTech = false;
    
    for (const tech of commonTechs) {
      const techElement = page.locator('div, span, p').filter({ hasText: tech });
      if (await techElement.count() > 0) {
        await expect(techElement.first()).toBeVisible();
        foundTech = true;
        break;
      }
    }
    
    expect(foundTech).toBe(true);
  });

  test('should display project images', async ({ page }) => {
    await page.goto('/projects/1');
    
    // Wait for images to load
    await page.waitForTimeout(1000);
    
    // Check for project images
    const projectImages = page.locator('img').filter({ hasText: '' });
    if (await projectImages.count() > 0) {
      await expect(projectImages.first()).toBeVisible();
    }
    
    // Check for image navigation if multiple images exist
    const imageNavButtons = page.locator('button').filter({ hasText: /←|→|Previous|Next/i });
    if (await imageNavButtons.count() > 0) {
      // Test image navigation
      await imageNavButtons.first().click();
      await page.waitForTimeout(500);
    }
  });

  test('should have working external links', async ({ page }) => {
    await page.goto('/projects/1');
    
    // Wait for content to load
    await page.waitForTimeout(1000);
    
    // Check for GitHub link
    const githubLink = page.locator('a').filter({ hasText: /GitHub|Source|Code/i });
    if (await githubLink.count() > 0) {
      await expect(githubLink.first()).toBeVisible();
      await expect(githubLink.first()).toHaveAttribute('href', /github|git/i);
      await expect(githubLink.first()).toHaveAttribute('target', '_blank');
    }
    
    // Check for live demo link
    const demoLink = page.locator('a').filter({ hasText: /Demo|Live|Visit/i });
    if (await demoLink.count() > 0) {
      await expect(demoLink.first()).toBeVisible();
      await expect(demoLink.first()).toHaveAttribute('target', '_blank');
    }
  });

  test('should navigate back to projects page', async ({ page }) => {
    await page.goto('/projects/1');
    
    // Click back button
    const backButton = page.locator('button').filter({ hasText: /Back|←/i });
    await backButton.click();
    
    // Should navigate back to projects page
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1, h2')).toContainText(/Projects/i);
  });

  test('should handle invalid project ID', async ({ page }) => {
    // Navigate to non-existent project
    await page.goto('/projects/999');
    
    // Should show not found message or redirect
    const notFoundElements = page.locator('h1, h2, p').filter({ hasText: /Not Found|404|doesn't exist/i });
    if (await notFoundElements.count() > 0) {
      await expect(notFoundElements.first()).toBeVisible();
    }
    
    // Should have a way to go back to projects
    const backButton = page.locator('button, a').filter({ hasText: /Back|Projects/i });
    if (await backButton.count() > 0) {
      await expect(backButton.first()).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/projects/1');
    
    // Check if page still loads correctly on mobile
    await expect(page.locator('h1')).toContainText(/E-Commerce|Task Management|Weather|Analytics|Fitness|Chatbot|Blockchain|Portfolio/i);
    
    // Check if back button is still accessible
    const backButton = page.locator('button').filter({ hasText: /Back|←/i });
    await expect(backButton).toBeVisible();
    
    // Check if content is properly arranged for mobile
    await page.waitForTimeout(1000);
    const techSection = page.locator('h2, h3').filter({ hasText: /Technologies|Tech/i });
    if (await techSection.count() > 0) {
      await expect(techSection.first()).toBeVisible();
    }
  });

  test('should test multiple project detail pages', async ({ page }) => {
    // Test multiple project IDs to ensure they all work
    const projectIds = [1, 2, 3, 4, 5];
    
    for (const id of projectIds) {
      await page.goto(`/projects/${id}`);
      
      // Check if page loads (either shows content or not found)
      const hasContent = await page.locator('h1').count() > 0;
      expect(hasContent).toBe(true);
      
      // If content exists, check for back button
      if (hasContent) {
        const backButton = page.locator('button').filter({ hasText: /Back|←/i });
        if (await backButton.count() > 0) {
          await expect(backButton).toBeVisible();
        }
      }
    }
  });
});

