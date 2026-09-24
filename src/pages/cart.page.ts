import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async verifyCartContainsProduct() {
    await expect(
      this.page.locator('#cart_info_table')
    ).toBeVisible();
  }

  async proceedToCheckout() {
    await this.page.getByText('Proceed To Checkout').click();
  }
}