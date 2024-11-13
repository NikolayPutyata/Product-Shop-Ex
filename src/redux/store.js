import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/cartSlice";
import { productsReducer } from "./Products/productsSlice";
import { singleProductSliceReducer } from "./Products/singleProductSlice";
import { searchingProductsReducer } from "./Products/searchingProductsSlice";
import { homeSliceReducer } from "./Home/homeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    listItems: productsReducer,
    singleProduct: singleProductSliceReducer,
    searchingProducts: searchingProductsReducer,
    homeSlice: homeSliceReducer,
  },
});
