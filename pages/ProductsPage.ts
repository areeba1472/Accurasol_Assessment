import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  productTitle = '.title';
  addToCartButton = '#add-to-cart-sauce-labs-backpack';
  cartIcon = '.shopping_cart_link';

  async verifyProductPage() {
    await expect(this.page.locator(this.productTitle)).toHaveText('Products');
  }

  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
