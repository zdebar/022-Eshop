import { createContext, useState, useContext } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: CartItem) {
    setCart(function (prevCart) {
      const existingProduct = prevCart.find(function (item) {
        return item.id === product.id;
      });
      if (existingProduct) {
        return prevCart.map(function (item) {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart(function (prevCart) {
      return prevCart.filter(function (item) {
        return item.id !== id;
      });
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook pro použití CartContextu
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart musí být použit v rámci CartProvider');
  }
  return context;
}
