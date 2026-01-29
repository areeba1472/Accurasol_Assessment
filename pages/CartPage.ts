import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem = '.inventory_item_name';
  checkoutButton = '#checkout';

  async verifyItemInCart() {
    await expect(this.page.locator(this.cartItem)).toBeVisible();
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}
