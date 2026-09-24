import { ApiClient } from './api-clients';

export class SearchApi {
  constructor(private readonly api: ApiClient) {}

  async searchProduct(product: string) {
    return this.api.post('/searchProduct', {
      search_product: product
    });
  }

  async searchWithoutParameter() {
    return this.api.post('/searchProduct');
  }
}