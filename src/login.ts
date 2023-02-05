import type {Locator, Page} from '@playwright/test';

export default class Login {
  loginForm: Locator;
  private readonly page: Page;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly password: string;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = this.page.locator('.login-form');
    this.userNameInput = this.loginForm.locator('[name=username]');
    this.passwordInput = this.loginForm.locator('[name=password]');
    this.loginButton = this.loginForm.locator('[name=login]');
    this.password = 'test';
  }

  async loginWithUser(username: string, password: string): Promise<void> {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
