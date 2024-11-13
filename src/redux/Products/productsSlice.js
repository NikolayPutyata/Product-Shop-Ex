import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../operations/productsOps";
import { selectCartItems } from "../Cart/cartSlice";
import { selectSingleProduct } from "./singleProductSlice";
import { selectSearchingProducts } from "./searchingProductsSlice";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "listItems",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state) => state.listItems.products;

export const selectDisabledProductTitles = createSelector(
  [selectCartItems, selectProducts, selectSearchingProducts],
  (cartItems, products, searchingProducts) => {
    const cartProductTitles = new Set(
      cartItems?.map((product) => product.title)
    );

    const allProducts = [...products, ...searchingProducts];

    return allProducts
      .filter((product) => cartProductTitles.has(product.title))
      .map((product) => product.title);
  }
);

export const selectDisabledProduct = createSelector(
  [selectCartItems, selectSingleProduct],
  (cartItems, product) => {
    const cartProductTitles = new Set(
      cartItems?.map((cartItem) => cartItem.title)
    );
    return cartProductTitles.has(product.title);
  }
);
