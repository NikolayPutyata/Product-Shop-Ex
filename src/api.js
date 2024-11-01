import axios from "axios";

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products?limit=12");
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMoreProducts = async (skipElements) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=12&skip=${skipElements}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchProductById = async (productId) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const searchProductByQuery = async (query) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
