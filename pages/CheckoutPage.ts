import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';
  continueBtn = '#continue';
  finishBtn = '#finish';
  confirmationMsg = '.complete-header';

  async fillCheckoutInfo() {
    await this.page.fill(this.firstName, 'Areeba');
    await this.page.fill(this.lastName, 'Iftikhar');
    await this.page.fill(this.postalCode, '44000');
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator(this.confirmationMsg))
      .toHaveText('Thank you for your order!');
  }
}
