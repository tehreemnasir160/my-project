import { test, expect } from '../fixtures/testSetup.js';

import loginData from '../testdata/LoginData.json';
import checkoutData from '../testdata/Checkout.json';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddToCart.js';
import Checkout from '../Pages/Checkout.js';

import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('Checkout', () => {

  test('Complete Checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cart = new AddToCart(page);
    const checkout = new Checkout(page);

    const login = loginData.validUsers[0];

    // =========================
    // LOGIN
    // =========================

    await test.step('Login', async () => {

      await loginPage.login(
        login.username,
        login.password
      );

    });

    // =========================
    // ADD 6 PRODUCTS
    // =========================

    await test.step('Add Backpack', async () => {
      await cart.addBackpack();
    });

    await test.step('Add Bike Light', async () => {
      await cart.addBikeLight();
    });

    await test.step('Add Bolt T-Shirt', async () => {
      await cart.addBoltTShirt();
    });

    await test.step('Add Fleece Jacket', async () => {
      await cart.addFleeceJacket();
    });

    await test.step('Add Onesie', async () => {
      await cart.addOnesie();
    });

    await test.step('Add Red T-Shirt', async () => {
      await cart.addRedTShirt();
    });

    // =========================
    // VERIFY CART = 6
    // =========================

    await test.step('Verify cart count', async () => {

      await expect(cart.cartBadge)
        .toHaveText('6');

      await attachStepScreenshot(
        page,
        '07 - Cart badge shows 6'
      );

    });

    // =========================
    // OPEN CART
    // =========================

    await test.step('Open Cart', async () => {

      await cart.openCart();

    });

    // =========================
    // VERIFY CART ITEMS = 6
    // =========================

    await test.step('Verify all cart items', async () => {

      await expect(cart.cartItems)
        .toHaveCount(6);

      await attachStepScreenshot(
        page,
        '08 - All 6 products in cart'
      );

    });

    // =========================
    // CHECKOUT
    // =========================

    await test.step('Click Checkout', async () => {

      await checkout.clickCheckout();

    });

    // =========================
    // CUSTOMER INFORMATION
    // =========================

    await test.step('Fill Customer Information', async () => {

      await checkout.fillCustomerInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
      );

    });

    // =========================
    // CONTINUE
    // =========================

    await test.step('Continue to Overview', async () => {

      await checkout.clickContinue();

    });

    // =========================
    // VERIFY OVERVIEW TITLE
    // =========================

    await test.step('Verify Checkout Overview', async () => {

      await expect(checkout.title)
        .toHaveText(checkoutData.overviewTitle);

      await attachStepScreenshot(
        page,
        '09 - Checkout Overview'
      );

    });

    // =========================
    // VERIFY 6 PRODUCTS
    // =========================

    await test.step('Verify Order Items', async () => {

      await expect(checkout.cartItems)
        .toHaveCount(6);

      await expect(checkout.subtotal)
        .toBeVisible();

      await expect(checkout.tax)
        .toBeVisible();

      await expect(checkout.total)
        .toBeVisible();

      await attachStepScreenshot(
        page,
        '10 - Order overview verification'
      );

    });

    // =========================
    // FINISH ORDER
    // =========================

    await test.step('Finish Order', async () => {

      await checkout.clickFinish();

    });

    // =========================
    // VERIFY CONFIRMATION
    // =========================

    await test.step('Verify Order Complete', async () => {

      await expect(checkout.completeHeader)
        .toHaveText(checkoutData.confirmationMessage);

      await attachStepScreenshot(
        page,
        '11 - Order completion verification'
      );

    });

  });

});