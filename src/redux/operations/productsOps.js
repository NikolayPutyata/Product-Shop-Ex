import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseSorters } from "../utils/auxiliaryFunctions";

const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ skipElements, sorters }, thunkAPI) => {
    try {
      const sortParams = sorters !== "none" ? parseSorters(sorters) : {};
      const { data } = await axios.get(BASE_URL, {
        params: {
          limit: 12,
          skip: skipElements,
          ...sortParams,
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "products/category",
  async ({ currentCategory, currentSkip, sorters }, thunkAPI) => {
    try {
      const sortParams = sorters !== "none" ? parseSorters(sorters) : {};
      const { data } = await axios.get(
        `${BASE_URL}/category/${currentCategory}`,
        {
          params: {
            limit: 12,
            skip: currentSkip,
            ...sortParams,
          },
        }
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${productId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMainProductById = createAsyncThunk(
  "products/fetchMainProductById",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${productId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchProductByQuery = createAsyncThunk(
  "products/searchProductByQuery",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/search`, {
        params: { q: query, limit: 12 },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
