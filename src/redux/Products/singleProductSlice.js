import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOps";

const initialState = {
  singleProduct: {},
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = { ...action.payload };
      })
      .addCase(fetchProducts.fulfilled, (state) => {
        state.singleProduct = {};
      }); ///це треба пофіксити
  },
});

export const singleProductSliceReducer = singleProductSlice.reducer;

export const selectSingleProduct = (state) => state.singleProduct.singleProduct;
