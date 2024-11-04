import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, getMoreProducts } from "./productsOps";
import { selectCartItems } from "../Cart/cartSlice";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "listItems",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
      })
      .addCase(getMoreProducts.fulfilled, (state, action) => {
        state.products = [...action.payload.products];
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state) => state.listItems.products;

export const selectDisabledProductIds = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products) => {
    const cartProductIds = new Set(cartItems?.map((product) => product.id));
    return products
      .filter((product) => cartProductIds?.has(product.id))
      .map((product) => product.id);
  }
);
