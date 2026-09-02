import { test, expect } from '../fixtures/testSetup.js';

import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddToCart.js';
import Checkout from '../Pages/Checkout.js';
import Logout from '../Pages/Logout.js';

import loginData from '../testdata/LoginData.json';
import checkoutData from '../testdata/Checkout.json';
import homePageData from '../testdata/HomePage.json';
import addToCartData from '../testdata/AddToCart.json';

import { attachStepScreenshot } from '../utilities/screenshots.js';


test('Smoke Test - End To End', async ({ page }) => {

    // =====================================================
    // PAGE OBJECTS
    // =====================================================

    const login = new LoginPage(page);
    const cart = new AddToCart(page);
    const checkout = new Checkout(page);
    const logout = new Logout(page);


    // =====================================================
    // TEST DATA
    // =====================================================

    const loginUser = loginData.validUsers[0];

    const expectedCartCount =
        Number(addToCartData.expectedCartCount);


    // =====================================================
    // 1. LOGIN
    // =====================================================

    await test.step('Login', async () => {

        await login.login(
            loginUser.username,
            loginUser.password
        );

        await attachStepScreenshot(
            page,
            '01 - Login successful'
        );

    });


    // =====================================================
    // 2. VERIFY PRODUCTS PAGE
    // =====================================================

    await test.step('Verify Products page', async () => {

        await expect(
            page.locator('[data-test="title"]')
        ).toHaveText(
            homePageData.pageTitle
        );

        await attachStepScreenshot(
            page,
            '02 - Products page verification'
        );

    });


    // =====================================================
    // 3. VERIFY HOMEPAGE
    // =====================================================

    await test.step('Verify Homepage', async () => {

        await expect(
            page.locator('[data-test="inventory-item"]')
        ).toHaveCount(
            Number(homePageData.productCount)
        );

        await expect(
            page.locator('[data-test="shopping-cart-link"]')
        ).toBeVisible();

        await attachStepScreenshot(
            page,
            '03 - Homepage verification'
        );

    });


    // =====================================================
    // 4. ADD BACKPACK
    // =====================================================

    await test.step('Add Backpack', async () => {

        await cart.addBackpack();

        await attachStepScreenshot(
            page,
            '04 - Backpack added'
        );

    });


    // =====================================================
    // 5. ADD BIKE LIGHT
    // =====================================================

    await test.step('Add Bike Light', async () => {

        await cart.addBikeLight();

        await attachStepScreenshot(
            page,
            '05 - Bike Light added'
        );

    });


    // =====================================================
    // 6. ADD BOLT T-SHIRT
    // =====================================================

    await test.step('Add Bolt T-Shirt', async () => {

        await cart.addBoltTShirt();

        await attachStepScreenshot(
            page,
            '06 - Bolt T-Shirt added'
        );

    });


    // =====================================================
    // 7. ADD FLEECE JACKET
    // =====================================================

    await test.step('Add Fleece Jacket', async () => {

        await cart.addFleeceJacket();

        await attachStepScreenshot(
            page,
            '07 - Fleece Jacket added'
        );

    });


    // =====================================================
    // 8. ADD ONESIE
    // =====================================================

    await test.step('Add Onesie', async () => {

        await cart.addOnesie();

        await attachStepScreenshot(
            page,
            '08 - Onesie added'
        );

    });


    // =====================================================
    // 9. ADD RED T-SHIRT
    // =====================================================

    await test.step('Add Red T-Shirt', async () => {

        await cart.addRedTShirt();

        await attachStepScreenshot(
            page,
            '09 - Red T-Shirt added'
        );

    });


    // =====================================================
    // 10. VERIFY CART BADGE
    // =====================================================

    await test.step('Verify cart count', async () => {

        await expect(
            page.locator('[data-test="shopping-cart-badge"]')
        ).toHaveText(
            String(expectedCartCount)
        );

        await attachStepScreenshot(
            page,
            '10 - Cart count verification'
        );

    });


    // =====================================================
    // 11. OPEN CART
    // =====================================================

    await test.step('Open Cart', async () => {

        await cart.openCart();

        await attachStepScreenshot(
            page,
            '11 - Shopping cart opened'
        );

    });


    // =====================================================
    // 12. VERIFY CART ITEMS
    // =====================================================

    await test.step('Verify cart items', async () => {

        await expect(
            page.locator('[data-test="inventory-item"]')
        ).toHaveCount(
            expectedCartCount
        );

        await attachStepScreenshot(
            page,
            '12 - Cart items verification'
        );

    });


    // =====================================================
    // 13. CLICK CHECKOUT
    // =====================================================

    await test.step('Click Checkout', async () => {

        await checkout.clickCheckout();

        await attachStepScreenshot(
            page,
            '13 - Checkout page opened'
        );

    });


    // =====================================================
    // 14. FILL CUSTOMER INFORMATION
    // =====================================================

    await test.step('Fill Customer Information', async () => {

        await checkout.fillCustomerInformation(
            checkoutData.firstName,
            checkoutData.lastName,
            checkoutData.postalCode
        );

        await attachStepScreenshot(
            page,
            '14 - Customer information entered'
        );

    });


    // =====================================================
    // 15. CONTINUE TO OVERVIEW
    // =====================================================

    await test.step('Continue to Overview', async () => {

        await checkout.clickContinue();

        await attachStepScreenshot(
            page,
            '15 - Checkout overview opened'
        );

    });


    // =====================================================
    // 16. VERIFY CHECKOUT OVERVIEW
    // =====================================================

    await test.step('Verify Checkout Overview', async () => {

        await expect(
            page.locator('[data-test="title"]')
        ).toHaveText(
            checkoutData.overviewTitle
        );

        await expect(
            page.locator('[data-test="inventory-item"]')
        ).toHaveCount(
            expectedCartCount
        );

        await expect(
            page.locator('[data-test="subtotal-label"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="tax-label"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="total-label"]')
        ).toBeVisible();

        await attachStepScreenshot(
            page,
            '16 - Checkout overview verification'
        );

    });


    // =====================================================
    // 17. FINISH ORDER
    // =====================================================

    await test.step('Finish Order', async () => {

        await checkout.clickFinish();

        await attachStepScreenshot(
            page,
            '17 - Order finished'
        );

    });


    // =====================================================
    // 18. VERIFY ORDER COMPLETE
    // =====================================================

    await test.step('Verify Order Complete', async () => {

        await expect(
            checkout.completeHeader
        ).toHaveText(
            checkoutData.confirmationMessage
        );

        await attachStepScreenshot(
            page,
            '18 - Order confirmation verification'
        );

    });


    // =====================================================
    // 19. LOGOUT
    // =====================================================

    await test.step('Logout', async () => {

        await logout.logout();

        await attachStepScreenshot(
            page,
            '19 - Logout completed'
        );

    });


    // =====================================================
    // 20. VERIFY LOGIN PAGE AFTER LOGOUT
    // =====================================================

    await test.step('Verify Login Page after Logout', async () => {

        await expect(
            page.locator('[data-test="login-button"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="username"]')
        ).toBeVisible();

        await expect(
            page.locator('[data-test="password"]')
        ).toBeVisible();

        await attachStepScreenshot(
            page,
            '20 - Login page after logout'
        );

    });

});