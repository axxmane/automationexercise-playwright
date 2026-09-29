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

  test('DELETE verifyLogin should return 405', async ({
    apiClient
  }) => {
    const response = await apiClient.delete('/verifyLogin');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
  });
});