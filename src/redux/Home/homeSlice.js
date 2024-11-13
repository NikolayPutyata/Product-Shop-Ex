import { createSlice } from "@reduxjs/toolkit";
import { fetchMainProductById } from "../operations/productsOps.js";

const initialState = {
  mainHomeProduct: {},
  navMenuIsOpen: false,
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    toggleNavMenu: (state) => {
      state.navMenuIsOpen = !state.navMenuIsOpen;
    },
    handleLinkClick: (state) => {
      state.navMenuIsOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMainProductById.fulfilled, (state, action) => {
      state.mainHomeProduct = { ...action.payload };
    });
  },
});

export const homeSliceReducer = homeSlice.reducer;
export const { toggleNavMenu, handleLinkClick } = homeSlice.actions;

export const selectMainHomeProduct = (state) => state.homeSlice.mainHomeProduct;
export const selectNavMenuIsOpen = (state) => state.homeSlice.navMenuIsOpen;
