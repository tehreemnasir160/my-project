import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshots.js';

class Logout {

  constructor(page) {
    this.page = page;

    this.menuButton = page.locator(
      '#react-burger-menu-btn'
    );

    this.logoutButton = page.locator(
      '#logout_sidebar_link'
    );

    this.username = page.locator('#user-name');

    this.password = page.locator('#password');

    this.loginButton = page.locator('#login-button');
  }

  async logout() {

    await test.step('Click Menu button', async () => {

      await this.menuButton.click();

      await attachStepScreenshot(
        this.page,
        '01 - Menu opened'
      );

    });

    await test.step('Click Logout', async () => {

      await this.logoutButton.click();

      await attachStepScreenshot(
        this.page,
        '02 - Logged out'
      );

    });
  }
}

export default Logout;