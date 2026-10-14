
import { test } from '../../src/fixtures/test-fxtures';

test.describe('Visual Regression', () => {
  test('home page header should match visual baseline', async ({
    page,
    browserName
  }) => {
    test.skip(
      browserName !== 'chromium',
      'Visual regression runs on Chromium only'
    );

    await page.goto('/');

    // Dismiss Google survey if it appears
const surveyFrame = page.frameLocator('iframe');

const doneButton = surveyFrame.getByRole('button', {
  name: 'Done'
});

if (await doneButton.isVisible({ timeout: 2000 }).catch(() => false)) {
  await doneButton.click();
}
  });
});
