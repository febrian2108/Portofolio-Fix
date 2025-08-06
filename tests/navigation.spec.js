const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Go to home page
    await page.goto('/');
    
    // Check if home page loads correctly
    await expect(page).toHaveTitle(/DevByte/);
    await expect(page.locator('h1')).toContainText('Fahri Febrian');
    
    // Navigate to About page
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1, h2')).toContainText(/About/i);
    
    // Navigate to Skills page
    await page.click('a[href="/skills"]');
    await expect(page).toHaveURL('/skills');
    await expect(page.locator('h1, h2')).toContainText(/Skills/i);
    
    // Navigate to Projects page
    await page.click('a[href="/projects"]');
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1, h2')).toContainText(/Projects/i);
    
    // Navigate back to Home
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('should have working logo navigation', async ({ page }) => {
    await page.goto('/projects');
    
    // Click on logo to go back to home
    await page.click('a img[alt="DEVBYTE"]');
    await expect(page).toHaveURL('/');
  });

  test('should handle mobile navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile menu button is visible
    const mobileMenuButton = page.locator('button').filter({ hasText: /menu/i }).or(page.locator('[data-testid="mobile-menu"]')).or(page.locator('button svg'));
    
    // If mobile menu exists, test it
    if (await mobileMenuButton.count() > 0) {
      await mobileMenuButton.first().click();
      
      // Check if navigation links are visible in mobile menu
      await expect(page.locator('a[href="/about"]')).toBeVisible();
      await expect(page.locator('a[href="/skills"]')).toBeVisible();
      await expect(page.locator('a[href="/projects"]')).toBeVisible();
    }
  });
});

