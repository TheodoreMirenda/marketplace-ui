
import { createContext } from 'react';
import { ProductOrder } from '../generated/graphql-schema';

export interface CartContext {
  cartItems?: ProductOrder[];
  isLoading: boolean;
  addToCart: (newProductOrder: ProductOrder) => Promise<void>;
  removeFromCart: (productOrder: ProductOrder) => Promise<void>;
  overrideCartItem: (productOrder: ProductOrder) => Promise<void>;
  clearCart: () => void;
  getCartTotal: () => number;
}

export default createContext<CartContext>({
  cartItems: undefined,
  isLoading: true,
  addToCart: () => Promise.resolve(),
  removeFromCart: () => Promise.resolve(),
  overrideCartItem: () => Promise.resolve(),
  clearCart: () => Promise.resolve(),
  getCartTotal: () => 0,
});