import { createContext } from 'react';
import { CartContextType } from "../types/dataTypes";

export const CartContext = createContext<CartContextType | undefined>(undefined);