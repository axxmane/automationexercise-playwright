import { test } from '../../src/fixtures/test-fxtures';
import type { Page } from '@playwright/test';

import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';

test.describe('Login E2E', () => {

  test('registered user can login successfully', async ({
    page,
    testUser
  }: {
    page: Page;
    testUser: {
      email: string;
      password: string;
      name: string;
    };
  }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goto();

    await homePage.openLogin();

    await loginPage.login(
      testUser.email,
      testUser.password
    );

    await loginPage.verifyLoggedIn(
      testUser.name
    );
  });

});