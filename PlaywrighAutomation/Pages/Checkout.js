import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

class Checkout {

  constructor(page) {
    this.page = page;

    this.checkoutButton = page.locator('#checkout');

    this.firstName = page.locator('#first-name');

    this.lastName = page.locator('#last-name');

    this.postalCode = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');

    this.cancelButton = page.locator('#cancel');

    this.finishButton = page.locator('#finish');

    this.title = page.locator('.title');

    this.completeHeader = page.locator('.complete-header');

    this.completeText = page.locator('.complete-text');

    this.cartItems = page.locator('.cart_item');

    this.subtotal = page.locator('.summary_subtotal_label');

    this.tax = page.locator('.summary_tax_label');

    this.total = page.locator('.summary_total_label');
  }

  async clickCheckout() {

    await test.step('Click Checkout', async () => {

      await this.checkoutButton.click();

      await attachStepScreenshot(
        this.page,
        '01 - Checkout information page'
      );

    });
  }

  async fillCustomerInformation(
    firstName,
    lastName,
    postalCode
  ) {

    await test.step('Enter First Name', async () => {

      await this.firstName.fill(firstName);

      await attachStepScreenshot(
        this.page,
        '02 - First Name entered'
      );

    });

    await test.step('Enter Last Name', async () => {

      await this.lastName.fill(lastName);

      await attachStepScreenshot(
        this.page,
        '03 - Last Name entered'
      );

    });

    await test.step('Enter Postal Code', async () => {

      await this.postalCode.fill(postalCode);

      await attachStepScreenshot(
        this.page,
        '04 - Postal Code entered'
      );

    });
  }

  async clickContinue() {

    await test.step('Click Continue', async () => {

      await this.continueButton.click();

      await attachStepScreenshot(
        this.page,
        '05 - Checkout overview'
      );

    });
  }

  async clickFinish() {

    await test.step('Click Finish', async () => {

      await this.finishButton.click();

      await attachStepScreenshot(
        this.page,
        '06 - Order completed'
      );

    });
  }

  async clickCancel() {

    await test.step('Click Cancel', async () => {

      await this.cancelButton.click();

      await attachStepScreenshot(
        this.page,
        'Checkout cancelled'
      );

    });
  }
}

export default Checkout;