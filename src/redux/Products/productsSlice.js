import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, getProductByCategory } from "../operations/productsOps";

const initialState = {
  products: [],
  total: 0,
};

const productsSlice = createSlice({
  name: "listItems",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.total = 0;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.products = action.payload.products;
      })
      .addCase(getProductByCategory.pending, (state) => {
        state.total = 0;
        state.products = [];
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.products = action.payload.products;
      });
  },
});

export const productsReducer = productsSlice.reducer;
