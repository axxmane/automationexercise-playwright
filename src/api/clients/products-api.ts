import { ApiClient } from './api-clients';

export class ProductsApi {
  constructor(private readonly api: ApiClient) {}

  async getProducts() {
    return this.api.get('/productsList');
  }

  async createProduct() {
    return this.api.post('/productsList');
  }
}