import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async verifyCheckoutPage(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout/);
  }

  async clickPlaceOrder(): Promise<void> {
    await this.page
      .getByRole('link', { name: /place order/i })
      .click();
  }
}