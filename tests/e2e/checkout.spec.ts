/*import { test as base, type Page } from '@playwright/test';

type TestUser = {
  email: string;
  password: string;
  name: string;
};

const test = base.extend<{ testUser: TestUser }>({
  testUser: async ({}, use) => {
    await use({
      email: process.env.TEST_USER_EMAIL ?? '',
      password: process.env.TEST_USER_PASSWORD ?? '',
      name: process.env.TEST_USER_NAME ?? ''
    });
  }
});
*/
/*import { type Page } from '@playwright/test';

import { test } from '../../src/fixtures/test-fxtures';
import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { ProductsPage } from '../../src/pages/products.page';
import { CartPage } from '../../src/pages/cart.page';
import { PaymentPage } from '../../src/pages/payment.page';

class CheckoutPage {
  constructor(private readonly page: Page) {}

  async verifyCheckoutPage(): Promise<void> {
    await this.page.waitForURL(/checkout/);
  }

  async clickPlaceOrder(): Promise<void> {
    await this.page
      .getByRole('button', { name: /place order/i })
      .click();
  }
}

test.describe('Registered user checkout', () => {

  test('registered user can complete a purchase', async ({
    page,
    testUser
  }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    // Open application
    await homePage.goto();

    // Login
    await homePage.openLogin();

    await loginPage.login(
      testUser.email,
      testUser.password
    );

    await loginPage.verifyLoggedIn(
      testUser.name
    );

    // Product search
    await homePage.openProducts();

    await productsPage.searchProduct('top');

    await productsPage.verifySearchResults();

    // Add product
    await productsPage.addFirstProductToCart();

    await productsPage.openCart();

    // Cart
    await cartPage.verifyCartContainsProduct();

    await cartPage.proceedToCheckout();

    // Checkout
    await checkoutPage.verifyCheckoutPage();

    await checkoutPage.clickPlaceOrder();

    // Payment
    await paymentPage.pay();

    await paymentPage.verifyOrderSuccess();
  });

});*/
import { test } from '../../src/fixtures/test-fxtures';

import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { ProductsPage } from '../../src/pages/products.page';
import { CartPage } from '../../src/pages/cart.page';
import { CheckoutPage } from '../../src/pages/checkout.page';
import { PaymentPage } from '../../src/pages/payment.page';

test.describe('Registered user checkout', () => {
  test('registered user can complete a purchase', async ({
    page,
    testUser
  }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    await test.step('Login as registered user', async () => {
      await homePage.goto();
      await homePage.openLogin();

      await loginPage.login(
        testUser.email,
        testUser.password
      );

      await loginPage.verifyLoggedIn(testUser.name);
    });

    await test.step('Search and add product to cart', async () => {
      await homePage.openProducts();

      await productsPage.searchProduct('top');
      await productsPage.verifySearchResults();
      await productsPage.addFirstProductToCart();
      await productsPage.openCart();
    });

    await test.step('Proceed to checkout', async () => {
      await cartPage.verifyCartContainsProduct();
      await cartPage.proceedToCheckout();
      await checkoutPage.verifyCheckoutPage();
    });

    await test.step('Complete payment', async () => {
      await checkoutPage.clickPlaceOrder();
      await paymentPage.pay();
      await paymentPage.verifyOrderSuccess();
    });
  });
});