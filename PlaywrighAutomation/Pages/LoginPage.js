import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');

    this.message = page.locator('.title');
  }

  async login(username, password) {

    await test.step('Enter username', async () => {
      await this.username.fill(username);

      await attachStepScreenshot(
        this.page,
        '01 - After username'
      );
    });

    await test.step('Enter password', async () => {
      await this.password.fill(password);

      await attachStepScreenshot(
        this.page,
        '02 - After password'
      );
    });

    await test.step('Click Login', async () => {
      await this.loginButton.click();

      await attachStepScreenshot(
        this.page,
        '03 - After login click'
      );
    });
  }
}

export default LoginPage;