import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://product-shop-ex-server.onrender.com";

export const fetchCartProducts = createAsyncThunk(
  "fetchCartProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/products");
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "addToCart",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post("/products", { ...product, count: 1 });
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/products/${product.id}`);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const increaseProductCount = createAsyncThunk(
  "increaseProduct",
  async (product, thunkAPI) => {
    try {
      await axios.put(`/products/${product.id}`, {
        ...product,
        count: product.count + 1,
      });
      thunkAPI.dispatch(fetchCartProducts());
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const decreaseProductCount = createAsyncThunk(
  "increaseProduct",
  async (product, thunkAPI) => {
    try {
      await axios.put(`/products/${product.id}`, {
        ...product,
        count: product.count - 1,
      });
      thunkAPI.dispatch(fetchCartProducts());
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
