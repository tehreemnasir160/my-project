import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/LoginData.json' assert { type: 'json' };
import LoginPage from '../Pages/LoginPage.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

test.describe('Login', () => {

  test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const data = loginData.validUsers[0];

    await test.step('Login with valid credentials', async () => {
      await loginPage.login(
        data.username,
        data.password
      );
    });

    await test.step('Verify Products page', async () => {

      await expect(loginPage.message).toHaveText(
        data.welcomeMessage
      );

      await attachStepScreenshot(
        page,
        '05 - After Products page verification'
      );

    });

  });

});