import { test, expect } from '@playwright/test';

test.describe('Login API', () => {

  test('login with missing parameter should return 400', async ({
    request
  }) => {
    const response = await request.post(
      '/verifyLogin',
      {
        form: {
          password: 'Password123!'
        }
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(400);
  });

  test('GET verifyLogin should return 405', async ({
    request
  }) => {
    const response = await request.get(
      '/verifyLogin'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
  });

});