import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User places order and checks out successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await products.addProductToCart();
  await products.goToCart();

  await cart.verifyItemInCart();
  await cart.checkout();

  await checkout.fillCheckoutInfo();
  await checkout.finishOrder();
  await checkout.verifyOrderSuccess();
});
