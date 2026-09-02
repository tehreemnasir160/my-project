import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

class HomePage {

  constructor(page) {
    this.page = page;

    this.productsTitle = page.locator('.title');

    this.productItems = page.locator('.inventory_item');

    this.productNames = page.locator('.inventory_item_name');

    this.sortDropdown = page.locator('.product_sort_container');

    this.cartLink = page.locator('.shopping_cart_link');

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.menuButton = page.locator('#react-burger-menu-btn');
  }

  async verifyProductsPage() {

    await test.step('Verify Products page', async () => {

      await this.productsTitle.waitFor();

      await attachStepScreenshot(
        this.page,
        '01 - Products page'
      );

    });
  }

  async sortProducts(option) {

    await test.step(`Sort products by ${option}`, async () => {

      await this.sortDropdown.selectOption(option);

      await attachStepScreenshot(
        this.page,
        `02 - Products sorted by ${option}`
      );

    });
  }

  async openCart() {

    await test.step('Click Shopping Cart', async () => {

      await this.cartLink.click();

      await attachStepScreenshot(
        this.page,
        '03 - Cart page opened'
      );

    });
  }

  async openMenu() {

    await test.step('Open Menu', async () => {

      await this.menuButton.click();

      await attachStepScreenshot(
        this.page,
        'Menu opened'
      );

    });
  }
}

export default HomePage;