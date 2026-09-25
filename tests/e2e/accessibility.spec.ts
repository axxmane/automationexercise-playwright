import { test } from '../../src/fixtures/test-fxtures';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('home page accessibility scan', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({
      page
    }).analyze();

    for (const violation of accessibilityScanResults.violations) {
      test.info().annotations.push({
        type: violation.impact ?? 'accessibility',
        description: `${violation.id}: ${violation.description}`
      });
    }
  });
});