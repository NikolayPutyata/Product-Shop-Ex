import { createSlice } from "@reduxjs/toolkit";
import { fetchMainProductById } from "./productsOps";

const initialState = {
  mainHomeProduct: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMainProductById.fulfilled, (state, action) => {
      state.mainHomeProduct = { ...action.payload };
    });
  },
});

export const homeSliceReducer = homeSlice.reducer;

export const selectMainHomeProduct = (state) => state.homeSlice.mainHomeProduct;
