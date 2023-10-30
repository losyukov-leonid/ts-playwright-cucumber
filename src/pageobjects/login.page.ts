import { expect } from '@playwright/test';
import Page from './page';

class LoginPage extends Page {
  public async getUsernameInput() {
    return await global.page.locator('xpath=//input[@name="username"]');
  }

  public async getPasswordInput() {
    return await global.page.locator('xpath=//input[@name="password"]');
  }

  public async getLoginBtn() {
    return await global.page.locator('button#submit');
  }

  public async getInvalidCredentialsError() {
    return await global.page.locator('div#error');
  }

  public open() {
    return super.open('practice-test-login/');
  }

  public async enterUsername(username: string) {
    await (await this.getUsernameInput()).fill(username);
  }

  public async enterPassword(password: string) {
    await (await this.getPasswordInput()).fill(password);
  }

  public async clickLogIn() {
    await (await this.getLoginBtn()).click();
  }

  public async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogIn();
  }

  public async expectLoginFormVisible() {
    await expect(await this.getUsernameInput()).toBeVisible();
    await expect(await this.getPasswordInput()).toBeVisible();
    await expect(await this.getLoginBtn()).toBeVisible();
  }

  public async expectInvalidCredentialsErrorVisible() {
    await expect(await this.getInvalidCredentialsError()).toBeVisible();
  }
}

export default new LoginPage();