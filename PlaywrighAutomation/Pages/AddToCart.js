import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

class AddToCart {

  constructor(page) {
    this.page = page;

    // Product 1
    this.backpackButton = page.locator(
      '#add-to-cart-sauce-labs-backpack'
    );

    // Product 2
    this.bikeLightButton = page.locator(
      '#add-to-cart-sauce-labs-bike-light'
    );

    // Product 3
    this.boltTShirtButton = page.locator(
      '#add-to-cart-sauce-labs-bolt-t-shirt'
    );

    // Product 4
    this.fleeceJacketButton = page.locator(
      '#add-to-cart-sauce-labs-fleece-jacket'
    );

    // Product 5
    this.onesieButton = page.locator(
      '#add-to-cart-sauce-labs-onesie'
    );

    // Product 6
    this.redTShirtButton = page.locator(
      '#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)'
    );

    // Cart
    this.cartLink = page.locator(
      '.shopping_cart_link'
    );

    this.cartBadge = page.locator(
      '.shopping_cart_badge'
    );

    this.cartItems = page.locator(
      '.cart_item'
    );
  }

  async addBackpack() {

    await test.step('Add Sauce Labs Backpack', async () => {

      await this.backpackButton.click();

      await attachStepScreenshot(
        this.page,
        '01 - Backpack added'
      );

    });
  }

  async addBikeLight() {

    await test.step('Add Sauce Labs Bike Light', async () => {

      await this.bikeLightButton.click();

      await attachStepScreenshot(
        this.page,
        '02 - Bike Light added'
      );

    });
  }

  async addBoltTShirt() {

    await test.step('Add Sauce Labs Bolt T-Shirt', async () => {

      await this.boltTShirtButton.click();

      await attachStepScreenshot(
        this.page,
        '03 - Bolt T-Shirt added'
      );

    });
  }

  async addFleeceJacket() {

    await test.step('Add Sauce Labs Fleece Jacket', async () => {

      await this.fleeceJacketButton.click();

      await attachStepScreenshot(
        this.page,
        '04 - Fleece Jacket added'
      );

    });
  }

  async addOnesie() {

    await test.step('Add Sauce Labs Onesie', async () => {

      await this.onesieButton.click();

      await attachStepScreenshot(
        this.page,
        '05 - Onesie added'
      );

    });
  }

  async addRedTShirt() {

    await test.step('Add Test AllTheThings T-Shirt', async () => {

      await this.redTShirtButton.click();

      await attachStepScreenshot(
        this.page,
        '06 - Red T-Shirt added'
      );

    });
  }

  async openCart() {

    await test.step('Open Shopping Cart', async () => {

      await this.cartLink.click();

      await attachStepScreenshot(
        this.page,
        '07 - Shopping Cart opened'
      );

    });
  }
}

export default AddToCart;