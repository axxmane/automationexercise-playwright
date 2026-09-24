import { ApiClient } from './api-clients';

export interface TestUser {
  name: string;
  email: string;
  password: string;
  title: string;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
}

export class AccountApi {
  constructor(private readonly api: ApiClient) {}

  async createAccount(user: TestUser) {
    return this.api.post('/createAccount', { ...user });
  }

  async getAccount(email: string) {
    return this.api.get(
      `/getUserDetailByEmail?email=${encodeURIComponent(email)}`
    );
  }

  async updateAccount(user: TestUser) {
    return this.api.put('/updateAccount', { ...user });
  }

  async deleteAccount(email: string, password: string) {
    return this.api.delete('/deleteAccount', {
      email,
      password
    });
  }
}