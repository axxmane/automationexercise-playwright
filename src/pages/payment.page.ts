import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  private readonly nameOnCard: Locator;

  private readonly cardNumber: Locator;

  private readonly cvc: Locator;

  private readonly expiryMonth: Locator;

  private readonly expiryYear: Locator;

  private readonly payButton: Locator;

  constructor(private readonly page: Page) {
    this.nameOnCard = this.page.locator(
      '[data-qa="name-on-card"]'
    );

    this.cardNumber = this.page.locator(
      '[data-qa="card-number"]'
    );

    this.cvc = this.page.locator(
      '[data-qa="cvc"]'
    );

    this.expiryMonth = this.page.locator(
      '[data-qa="expiry-month"]'
    );

    this.expiryYear = this.page.locator(
      '[data-qa="expiry-year"]'
    );

    this.payButton = this.page.locator(
      '[data-qa="pay-button"]'
    );
  }

  async pay() {
    await this.nameOnCard.fill('Playwright Tester');

    await this.cardNumber.fill('4111111111111111');

    await this.cvc.fill('123');

    await this.expiryMonth.fill('12');

    await this.expiryYear.fill('2030');

    await this.payButton.click();
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.getByText(
        'Order Placed!'
      )
    ).toBeVisible();
  }
}