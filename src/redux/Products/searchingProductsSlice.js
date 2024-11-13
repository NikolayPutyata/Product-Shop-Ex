import { createSlice } from "@reduxjs/toolkit";
import { searchProductByQuery } from "../operations/productsOps.js";

const initialState = {
  searchingProducts: [],
  searchingWord: "",
  searchLoading: false,
};

const searchingProductsSlice = createSlice({
  name: "searchingProducts",
  initialState,
  reducers: {
    setSearchingWord: (state, action) => {
      state.searchingWord = action.payload;
    },
  },
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

export const selectSearchingWord = (state) =>
  state.searchingProducts.searchingWord;

export const { setSearchingWord } = searchingProductsSlice.actions;
