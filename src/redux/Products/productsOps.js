import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMoreProducts = createAsyncThunk(
  "products/getMoreProducts",
  async (skipElements, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=12&skip=${skipElements}`
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMainProductById = createAsyncThunk(
  "products/fetchMainProductById",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchProductByQuery = createAsyncThunk(
  "products/searchProductByQuery",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
