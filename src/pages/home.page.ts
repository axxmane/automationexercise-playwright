import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async verifyHomePage() {
    await expect(
      this.page.locator('a[href="/"]')
    ).toBeVisible();
  }

  async openLogin() {
    await this.page.getByText('Signup / Login').click();
  }

  async openProducts() {
    await this.page.getByText('Products').click();
  }
}