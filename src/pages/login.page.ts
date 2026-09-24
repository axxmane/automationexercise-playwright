import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.emailInput = this.page.locator(
      'input[data-qa="login-email"]'
    );

    this.passwordInput = this.page.locator(
      'input[data-qa="login-password"]'
    );

    this.loginButton = this.page.locator(
      'button[data-qa="login-button"]'
    );
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async verifyLoggedIn(userName: string) {
    await expect(
      this.page.getByText(`Logged in as ${userName}`)
    ).toBeVisible();
  }

  async verifyInvalidLoginMessage() {
    await expect(
      this.page.getByText('Your email or password is incorrect!')
    ).toBeVisible();
  }
}