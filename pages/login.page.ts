import type {Locator, Page} from '@playwright/test';

export default class Login {
  // All applications will have their own local port to be able to go over multiple apps
  loginForm: Locator;

  private readonly page: Page;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly password: string;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = this.page.locator('.login-pf-page form');
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

  async goTo(application: string): Promise<void> {
  }

  async goToAndLogin(app: string, username: string): Promise<void> {
    await this.goTo(app);
    await this.loginWithUser(username, this.password);
  }

}
