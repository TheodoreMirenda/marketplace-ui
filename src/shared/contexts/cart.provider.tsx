import React, { FC, useState, useEffect, useCallback } from "react";
import CartContext from "./cart.context";
import { ProductOrder, } from "@src/shared/generated/graphql-schema";

const CartProvider: FC<{ children: any }> = ({ children }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<ProductOrder[]>([]);

  const addToCart = async (newItem : ProductOrder) => {
    try {
      const cartItemsCached = localStorage.getItem("cartItems");
      if(cartItemsCached) {
        //check if there is allready a productOrder with the same product id
        const isItemInCart = cartItems.find((cartItem) => cartItem.product?.uuid === newItem.product?.uuid);
        if (isItemInCart) {
          setCartItems(cartItems.map((cartItem) =>
              cartItem.product?.uuid === newItem.product?.uuid
                ? { ...cartItem, quantity: cartItem.quantity! + newItem.quantity! }
                : cartItem
            )
          );
        } else {
          setCartItems([...JSON.parse(cartItemsCached), newItem]);
        }
      }
      else {
        setCartItems([newItem]);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const removeFromCart = async (newItem : ProductOrder) => {
    try {
      setCartItems(cartItems.filter((newProductOrder: ProductOrder)=> newItem.product?.uuid !== newProductOrder.product?.uuid));
    } catch (error) {}
  };

  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };

  const getCartTotal = () => {
    let total = 0;
    cartItems?.forEach((item) => {
      total += item.product?.price! * item.quantity!;
    }
    );
    return total;
  };

  const overrideCartItem = async (newItem : ProductOrder) => {
    try {
      setCartItems(cartItems.map((cartItem) =>
          cartItem.product?.uuid === newItem.product?.uuid
            ? { ...cartItem, quantity: newItem.quantity! }
            : cartItem
        )
      );
    } catch (error) {}
  };

  useEffect(() => {
    const cartItems  = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
}, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{isLoading, cartItems, addToCart, removeFromCart, clearCart, getCartTotal, overrideCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

