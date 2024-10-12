import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteProduct, fetchCartProducts } from "./cartOps";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      });
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectAmount = createSelector([selectCartItems], (cartItems) => {
  return cartItems
    .reduce((amount, curr) => amount + curr.price * curr.count, 0)
    .toFixed(2);
});
