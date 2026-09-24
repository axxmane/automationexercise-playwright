import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
  }

  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }

  async verifySearchResults() {
    await expect(
      this.page.getByText('Searched Products')
    ).toBeVisible();
  }

async addFirstProductToCart() {
  const firstProduct = this.page
    .locator('.product-image-wrapper')
    .first();

  await firstProduct
    .locator('.add-to-cart')
    .first()
    .click();
}
  async openCart() {
    await this.page.getByText('View Cart').click();
  }
}