import { ApiClient } from './api-clients';

export class AuthApi {
  constructor(private readonly api: ApiClient) {}

  async verifyLogin(email: string, password: string) {
    return this.api.post('/verifyLogin', {
      email,
      password
    });
  }

  async verifyLoginWithoutEmail(password: string) {
    return this.api.post('/verifyLogin', {
      password
    });
  }

  async verifyLoginWithGet() {
    return this.api.get('/verifyLogin');
  }
}