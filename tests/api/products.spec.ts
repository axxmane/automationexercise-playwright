import { test, expect } from '../../src/fixtures/test-fxtures';
import { ProductsResponseSchema } from '../../src/api/schemas/product.schema';

test.describe('Products API', () => {
  test('GET products should return products successfully', async ({
    productsApi
  }) => {
    const response = await productsApi.getProducts();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);

    ProductsResponseSchema.parse(body);
  });

  test('POST products should return method not allowed', async ({
    productsApi
  }) => {
    const response = await productsApi.createProduct();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(405);
  });
});