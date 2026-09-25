import { test, expect } from '../../src/fixtures/test-fxtures';

test.describe('Visual Regression', () => {
  test('home page should match visual baseline', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
      timeout: 15000
    });
  });
});