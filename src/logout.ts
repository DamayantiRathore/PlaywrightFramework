import {Locator, Page} from '@playwright/test';

export default class Logout {
  private readonly page: Page;
  private readonly parentPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.parentPage = this.page.locator('app-root');
  }

  async logout(): Promise<void> {

  }
}
