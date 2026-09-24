import { ApiClient } from './api-clients';

export class BrandsApi {
  constructor(private readonly api: ApiClient) {}

  async getBrands() {
    return this.api.get('/brandsList');
  }

  async updateBrands() {
    return this.api.put('/brandsList');
  }
}