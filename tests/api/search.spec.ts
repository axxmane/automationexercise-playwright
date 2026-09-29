import { test, expect } from '../../src/fixtures/test-fxtures';

test.describe('Search API', () => {
  test('search product should succeed', async ({ searchApi }) => {
    const response = await searchApi.searchProduct('top');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
  });

  test('search without parameter should return 400', async ({
    searchApi
  }) => {
    const response = await searchApi.searchWithoutParameter();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(400);
  });
});