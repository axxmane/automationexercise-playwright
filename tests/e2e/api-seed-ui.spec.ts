import { test } from '../../src/fixtures/test-fxtures';

import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';

test.describe('API seed to UI verification', () => {
  test('API-created user can log in through the UI', async ({
    page,
    testUser
  }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await test.step('Open Automation Exercise', async () => {
      await homePage.goto();
    });

    await test.step('Login with API-created user', async () => {
      await homePage.openLogin();

      await loginPage.login(
        testUser.email,
        testUser.password
      );
    });

    await test.step('Verify logged-in state', async () => {
      await loginPage.verifyLoggedIn(testUser.name);
    });
  });
});