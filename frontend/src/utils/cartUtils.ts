import { CartItem } from "../types/dataTypes";

// Funkce pro přidání produktu do košíku
export function addToCart(cart: CartItem[], product: CartItem) {
  const existingProduct = cart.find(function (item) {
    return item.id === product.id;
  });
  if (existingProduct) {
    return cart.map(function (item) {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cart, { ...product, quantity: 1 }];
}

// Funkce pro odstranění produktu z košíku
export function removeFromCart(cart: CartItem[], id: number) {
  return cart.filter(function (item) {
    return item.id !== id;
  });
}

// Funkce pro vyprázdnění košíku
export function clearCart() {
  return [];
}
