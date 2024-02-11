import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const createProduct = async (newProduct) => {
  const { data } = await axios.post("/api/products", {
    ...newProduct,
  });
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
};

export const editProduct = async (id, updatedProduct) => {
  const { data } = await axios.put(`/api/products/${id}`, {
    ...updatedProduct,
  });
  return data;
};

export const getCart = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const addToCart = async (id) => {
  const { data } = await axios.post("/api/add-to-cart/", { productId: id });
  return data;
};

export const checkout = async () => {
  const { data } = await axios.post("/api/checkout");
  return data;
};
