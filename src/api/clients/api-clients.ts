import { APIRequestContext, APIResponse } from '@playwright/test';
import { config } from '../config/config';

type FormData = Record<string, string>;

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(`${config.apiUrl}${endpoint}`);
  }

  async post(
    endpoint: string,
    form?: FormData
  ): Promise<APIResponse> {
    return this.request.post(`${config.apiUrl}${endpoint}`, { form });
  }

  async put(
    endpoint: string,
    form?: FormData
  ): Promise<APIResponse> {
    return this.request.put(`${config.apiUrl}${endpoint}`, { form });
  }

  async delete(
    endpoint: string,
    form?: FormData
  ): Promise<APIResponse> {
    return this.request.delete(`${config.apiUrl}${endpoint}`, { form });
  }
}