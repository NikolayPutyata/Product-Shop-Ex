import { createSlice } from "@reduxjs/toolkit";
import { searchProductByQuery } from "../operations/productsOps.js";

const initialState = {
  searchingProducts: [],
  searchLoading: false,
};

const searchingProductsSlice = createSlice({
  name: "searchingProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchProductByQuery.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchingProducts = [...action.payload.products];
      })
      .addCase(searchProductByQuery.pending, (state) => {
        state.searchLoading = true;
        state.searchingProducts = [];
      });
  },
});

export const searchingProductsReducer = searchingProductsSlice.reducer;

export const selectSearchLoading = (state) =>
  state.searchingProducts.searchLoading;

export const selectSearchingProducts = (state) =>
  state.searchingProducts?.searchingProducts;
