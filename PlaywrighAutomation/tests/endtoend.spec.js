import { test, expect } from '../fixtures/testSetup.js';

import loginData from '../testdata/LoginData.json';
import checkoutData from '../testdata/Checkout.json';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddToCart.js';
import Checkout from '../Pages/Checkout.js';
import Logout from '../Pages/Logout.js';

import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('End To End Purchase Flow', () => {

  test('Complete Purchase Flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cart = new AddToCart(page);
    const checkout = new Checkout(page);
    const logout = new Logout(page);

    const login = loginData.validUsers[0];

    // =========================
    // 1. LOGIN
    // =========================

    await test.step('Login', async () => {

      await loginPage.login(
        login.username,
        login.password
      );

    });

    // =========================
    // 2. VERIFY PRODUCTS PAGE
    // =========================

    await test.step('Verify Products page', async () => {

      await expect(loginPage.message)
        .toHaveText(login.welcomeMessage);

      await attachStepScreenshot(
        page,
        '05 - Products page verification'
      );

    });

    // =========================
    // 3. ADD BACKPACK
    // =========================

    await test.step('Add Backpack', async () => {

      await cart.addBackpack();

    });

    // =========================
    // 4. ADD BIKE LIGHT
    // =========================

    await test.step('Add Bike Light', async () => {

      await cart.addBikeLight();

    });

    // =========================
    // 5. ADD BOLT T-SHIRT
    // =========================

    await test.step('Add Bolt T-Shirt', async () => {

      await cart.addBoltTShirt();

    });

    // =========================
    // 6. ADD FLEECE JACKET
    // =========================

    await test.step('Add Fleece Jacket', async () => {

      await cart.addFleeceJacket();

    });

    // =========================
    // 7. ADD ONESIE
    // =========================

    await test.step('Add Onesie', async () => {

      await cart.addOnesie();

    });

    // =========================
    // 8. ADD RED T-SHIRT
    // =========================

    await test.step('Add Red T-Shirt', async () => {

      await cart.addRedTShirt();

    });

    // =========================
    // 9. VERIFY CART COUNT
    // =========================

    await test.step('Verify cart count', async () => {

      await expect(cart.cartBadge)
        .toHaveText('6');

      await attachStepScreenshot(
        page,
        '09 - Cart count verification'
      );

    });

    // =========================
    // 10. OPEN CART
    // =========================

    await test.step('Open Cart', async () => {

      await cart.openCart();

    });

    // =========================
    // 11. CHECKOUT
    // =========================

    await test.step('Click Checkout', async () => {

      await checkout.clickCheckout();

    });

    // =========================
    // 12. CUSTOMER INFORMATION
    // =========================

    await test.step('Fill Customer Information', async () => {

      await checkout.fillCustomerInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
      );

    });

    // =========================
    // 13. CONTINUE
    // =========================

    await test.step('Continue to Overview', async () => {

      await checkout.clickContinue();

    });

    // =========================
    // 14. VERIFY ORDER OVERVIEW
    // =========================

    await test.step('Verify Order Overview', async () => {

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
    // 15. FINISH ORDER
    // =========================

    await test.step('Finish Order', async () => {

      await checkout.clickFinish();

    });

    // =========================
    // 16. VERIFY ORDER COMPLETE
    // =========================

    await test.step('Verify Order Complete', async () => {

      await expect(checkout.completeHeader)
        .toHaveText(
          checkoutData.confirmationMessage
        );

      await attachStepScreenshot(
        page,
        '11 - Order completion verification'
      );

    });

    // =========================
    // 17. LOGOUT
    // =========================

    await test.step('Logout', async () => {

      await logout.logout();

    });

    // =========================
    // 18. VERIFY LOGOUT
    // =========================

    await test.step('Verify Login Page after Logout', async () => {

      await expect(logout.username)
        .toBeVisible();

      await expect(logout.password)
        .toBeVisible();

      await expect(logout.loginButton)
        .toBeVisible();

      await attachStepScreenshot(
        page,
        '12 - Login page after logout'
      );

    });

  });

});