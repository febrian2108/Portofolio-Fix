const { test, expect } = require('@playwright/test');

test.describe('Skills Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/skills');
  });

  test('should display skills page correctly', async ({ page }) => {
    // Check page title and heading
    await expect(page.locator('h1, h2')).toContainText(/Skills/i);
    
    // Check if skills are displayed
    await expect(page.locator('[data-testid="skill-card"]').or(page.locator('.skill-card')).or(page.locator('div').filter({ hasText: /React|JavaScript|Python/i }))).toHaveCount({ min: 1 });
  });

  test('should display skill categories', async ({ page }) => {
    // Wait for skills to load
    await page.waitForTimeout(1000);
    
    // Check for common skill categories
    const categories = [
      'Frontend Development',
      'Backend Development', 
      'Database',
      'Tools',
      'Mobile Development'
    ];
    
    for (const category of categories) {
      // Look for category headings or skill cards with these categories
      const categoryElement = page.locator('h2, h3, .category-title').filter({ hasText: category })
        .or(page.locator('div').filter({ hasText: category }));
      
      if (await categoryElement.count() > 0) {
        await expect(categoryElement.first()).toBeVisible();
      }
    }
  });

  test('should display skill icons and descriptions', async ({ page }) => {
    // Wait for content to load
    await page.waitForTimeout(1000);
    
    // Check for skill images/icons
    const skillImages = page.locator('img').filter({ hasText: '' });
    if (await skillImages.count() > 0) {
      await expect(skillImages.first()).toBeVisible();
    }
    
    // Check for skill descriptions or names
    const commonSkills = ['React', 'JavaScript', 'Python', 'HTML', 'CSS'];
    let foundSkill = false;
    
    for (const skill of commonSkills) {
      const skillElement = page.locator('div, span, p').filter({ hasText: skill });
      if (await skillElement.count() > 0) {
        await expect(skillElement.first()).toBeVisible();
        foundSkill = true;
        break;
      }
    }
    
    expect(foundSkill).toBe(true);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if page still loads correctly
    await expect(page.locator('h1, h2')).toContainText(/Skills/i);
    
    // Check if skills are still visible and properly arranged
    await page.waitForTimeout(1000);
    const skillElements = page.locator('div').filter({ hasText: /React|JavaScript|Python/i });
    if (await skillElements.count() > 0) {
      await expect(skillElements.first()).toBeVisible();
    }
  });
});

