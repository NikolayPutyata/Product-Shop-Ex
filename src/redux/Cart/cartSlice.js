import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteProduct,
  fetchCartProducts,
} from "../operations/cartOps";

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
        state.isError = null;
        state.cartItems = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
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
        }
      );
  },
});

export const cartReducer = cartSlice.reducer;
