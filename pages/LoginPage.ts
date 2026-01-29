import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
