import { test, expect } from '@playwright/test';

test.describe('Brands API', () => {

  test('GET brands should return successfully', async ({
    request
  }) => {
    const response = await request.get('/brandsList');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
  });

  test('PUT brands should return method not allowed', async ({
    request
  }) => {
    const response = await request.put('/brandsList');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
  });

});