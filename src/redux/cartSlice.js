import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addToCart, deleteProduct, fetchCartProducts } from "./cartOps";

const initialState = {
  cartItems: [],
  isLoading: false,
  isError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.cartItems = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.cartItems.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          addToCart.rejected,
          deleteProduct.rejected,
          fetchCartProducts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.error.message;
        }
      )
      .addMatcher(
        isAnyOf(addToCart.pending, fetchCartProducts.pending),
        (state) => {
          state.isError = null;
          state.isLoading = true;
        }
      );
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectIsLoading = (state) => state.cart.isLoading;

export const selectAmount = createSelector([selectCartItems], (cartItems) => {
  return cartItems
    .reduce((amount, curr) => amount + curr.price * curr.count, 0)
    .toFixed(2);
});
