import { expect } from '@playwright/test';
import Page from './page';

class MainPage extends Page {
  public async getSuccessfulLoginTitle() {
    return await global.page.locator('h1.post-title');
  }

  public async expectSuccessfulLoginTitleVisible() {
    await expect(await this.getSuccessfulLoginTitle()).toBeVisible();
  }
}

export default new MainPage();