import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "../operations/productsOps";

const initialState = {
  singleProduct: {},
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.singleProduct = {};
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = { ...action.payload };
      });
  },
});

export const singleProductSliceReducer = singleProductSlice.reducer;
