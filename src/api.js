import axios from "axios";

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products?limit=10");
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMoreProducts = async (skipElements) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${skipElements}`
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
