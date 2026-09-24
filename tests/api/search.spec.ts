import { test, expect } from '@playwright/test';

test.describe('Search API', () => {

  test('search product should succeed', async ({ request }) => {
    const response = await request.post(
      '/searchProduct',
      {
        form: { search_product: 'top' }
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
  });

  test('search without parameter should return 400', async ({ request }) => {
    const response = await request.post(
      '/searchProduct'
    );

    expect(response.status()).toBe(400);
  });

});