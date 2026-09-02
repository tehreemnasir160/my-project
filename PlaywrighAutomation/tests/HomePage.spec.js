import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/LoginData.json';
import homePageData from '../testdata/HomePage.json';


import LoginPage from '../Pages/LoginPage.js';
import HomePage from '../Pages/HomePage.js';

import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('Home Page', () => {

  test('Verify Home Page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const homePage = new HomePage(page);

    const data = loginData.validUsers[0];

    await test.step('Login', async () => {

      await loginPage.login(
        data.username,
        data.password
      );

    });

    await test.step('Verify Products page', async () => {

      await expect(homePage.productsTitle)
        .toHaveText(data.welcomeMessage);

      await attachStepScreenshot(
        page,
        '01 - Products page verification'
      );

    });

    await test.step('Verify product count', async () => {

      await expect(homePage.productItems)
        .toHaveCount(homePageData.productCount);

      await attachStepScreenshot(
        page,
        '02 - Product count verification'
      );

    });

  });

});