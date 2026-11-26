import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
 
  test('successful login with valid credentials', async ({ page }) => {
    await page.goto('https://qainterview.netlify.app/index.html');

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    // Fill inputs using ID or Placeholder from your HTML
    await page.locator('#username').fill('Fionn');
    await page.locator('#password').fill('Test123!');

    // Click the Login button
    await page.locator('#loginBtn').click();

    // Assert successful navigation or dashboard element
    await expect(page).not.toHaveURL('https://qainterview.netlify.app/dashboard.html');
  });

  
});