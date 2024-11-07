import { createSlice } from "@reduxjs/toolkit";
import { searchProductByQuery } from "./productsOps";


const initialState = {
  searchingProducts: [],
  searchingWord: "",
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
    builder.addCase(searchProductByQuery.fulfilled, (state, action) => {
      state.searchingProducts = [...action.payload.products];
    });
  },
});

export const searchingProductsReducer = searchingProductsSlice.reducer;

export const selectSearchingProducts = (state) =>
  state.searchingProducts?.searchingProducts;

export const selectSearchingWord = (state) =>
  state.searchingProducts.searchingWord;

export const { setSearchingWord } = searchingProductsSlice.actions;
