import { test, expect } from '../../src/fixtures/test-fxtures';

test.describe('Login API', () => {
  test('login with missing parameter should return 400', async ({
    authApi
  }) => {
    const response = await authApi.verifyLoginWithoutEmail(
      'Password123!'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(400);
  });

  test('GET verifyLogin should return 405', async ({ authApi }) => {
    const response = await authApi.verifyLoginWithGet();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
  });
});