import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.listItems.products;

export const selectTotalProducts = (state) => state.listItems.total;

export const selectSingleProduct = (state) => state.singleProduct.singleProduct;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectIsLoading = (state) => state.cart.isLoading;

export const selectMainHomeProduct = (state) => state.homeSlice.mainHomeProduct;

export const selectNavMenuIsOpen = (state) => state.homeSlice.navMenuIsOpen;

export const selectSearchLoading = (state) =>
  state.searchingProducts.searchLoading;

export const selectSearchingProducts = (state) =>
  state.searchingProducts?.searchingProducts;

export const selectAmount = createSelector([selectCartItems], (cartItems) => {
  return cartItems
    .reduce((amount, curr) => amount + curr.price * curr.count, 0)
    .toFixed(2);
});

export const selectDisabledProduct = createSelector(
  [selectCartItems, selectSingleProduct],
  (cartItems, product) => {
    const cartProductTitles = new Set(
      cartItems?.map((cartItem) => cartItem.title)
    );
    return cartProductTitles.has(product.title);
  }
);

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
