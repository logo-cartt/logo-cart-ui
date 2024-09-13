/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type CartItem = {
  product: Product,
  quantity: number
};

type Cart = {
  cartItems: CartItem[]
  totalQuantity: number,
  totalPrice: number
};

const initialState: Cart = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.product.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ product: action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cartItems.find((cartItem) => cartItem.product.id === action.payload);

      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          itemInCart.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.product.id !== action.payload,
          );
        }
        state.totalQuantity -= 1;
        state.totalPrice -= itemInCart.product.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
