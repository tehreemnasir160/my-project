import { test, expect } from '../fixtures/testSetup.js';

import loginData from '../testdata/LoginData.json';

import LoginPage from '../Pages/LoginPage.js';
import Logout from '../Pages/Logout.js';

import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('Logout', () => {

  test('Logout from application', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const logout = new Logout(page);

    const data = loginData.validUsers[0];

    await test.step('Login', async () => {

      await loginPage.login(
        data.username,
        data.password
      );

    });

    await test.step('Logout', async () => {

      await logout.logout();

    });

    await test.step('Verify Login page', async () => {

      await expect(logout.username)
        .toBeVisible();

      await expect(logout.password)
        .toBeVisible();

      await expect(logout.loginButton)
        .toBeVisible();

      await attachStepScreenshot(
        page,
        '03 - Login page after logout'
      );

    });

  });

});