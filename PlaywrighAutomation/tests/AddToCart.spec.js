import { test, expect } from '../fixtures/testSetup.js';

import loginData from '../testdata/LoginData.json';
import addToCartData from '../testdata/AddToCart.json';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddToCart.js';

import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('Add To Cart', () => {

  test('Add all products to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cart = new AddToCart(page);

    const login = loginData.validUsers[0];

    await test.step('Login', async () => {

      await loginPage.login(
        login.username,
        login.password
      );

    });

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

    await test.step('Verify cart badge', async () => {

      await expect(cart.cartBadge)
        .toHaveText(addToCartData.expectedCartCount);

      await attachStepScreenshot(
        page,
        '07 - Cart badge shows 6'
      );

    });

    await test.step('Open Cart', async () => {

      await cart.openCart();

    });

    await test.step('Verify all cart items', async () => {

      await expect(cart.cartItems)
        .toHaveCount(addToCartData.expectedCartItems);

      await attachStepScreenshot(
        page,
        '08 - All 6 products in cart'
      );

    });

  });

});