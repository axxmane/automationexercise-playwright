import { test as base, expect } from '@playwright/test';

import { ApiClient } from '../api/clients/api-clients';
import { AccountApi, TestUser } from '../api/clients/account-api';
import { AuthApi } from '../api/clients/auth-api';
import { BrandsApi } from '../api/clients/brands-api';
import { ProductsApi } from '../api/clients/products-api';
import { SearchApi } from '../api/clients/search-api';
import { createTestUser } from '../data/test-data';

type Fixtures = {
  apiClient: ApiClient;
  accountApi: AccountApi;
  authApi: AuthApi;
  brandsApi: BrandsApi;
  productsApi: ProductsApi;
  searchApi: SearchApi;
  testUser: TestUser;
};

export const test = base.extend<Fixtures>({
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);

    await use(apiClient);
  },

  accountApi: async ({ apiClient }, use) => {
    const accountApi = new AccountApi(apiClient);

    await use(accountApi);
  },

  authApi: async ({ apiClient }, use) => {
    const authApi = new AuthApi(apiClient);

    await use(authApi);
  },

  brandsApi: async ({ apiClient }, use) => {
    const brandsApi = new BrandsApi(apiClient);

    await use(brandsApi);
  },

  productsApi: async ({ apiClient }, use) => {
    const productsApi = new ProductsApi(apiClient);

    await use(productsApi);
  },

  searchApi: async ({ apiClient }, use) => {
    const searchApi = new SearchApi(apiClient);

    await use(searchApi);
  },

  testUser: async ({ accountApi }, use) => {
    const user = createTestUser();

    const createResponse = await accountApi.createAccount(user);

    expect(createResponse.ok()).toBeTruthy();

    await use(user);

    const deleteResponse = await accountApi.deleteAccount(
      user.email,
      user.password
    );

    expect(deleteResponse.ok()).toBeTruthy();
  }
});

export { expect };