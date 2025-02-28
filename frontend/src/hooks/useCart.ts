import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart musí být použit v rámci CartProvider');
  }
  return context;
}
