import React, { useState } from 'react';
import { CartItem } from '../types/dataTypes';
import { CartContext } from './cartContext';
import { addToCart, removeFromCart, clearCart } from '../utils/cartUtils';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function handleAddToCart(product: CartItem) {
    setCart(function (prevCart) {
      return addToCart(prevCart, product);
    });
  }

  function handleRemoveFromCart(id: number) {
    setCart(function (prevCart) {
      return removeFromCart(prevCart, id);
    });
  }

  function handleClearCart() {
    setCart(function () {
      return clearCart();
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart, clearCart: handleClearCart }}>
      {children}
    </CartContext.Provider>
  );
}



