import Header from "./Header";
import ProductList from "./ProductList";
import AddForm from "./AddForm";
import { useState, useEffect } from "react";

import {
  createProduct,
  getProducts,
  deleteProduct,
  editProduct,
} from "../services/products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (newProduct, callback) => {
    try {
      const data = await createProduct(newProduct);
      setProducts([...products, data]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleEdit = async (id, updatedProduct) => {
    try {
      const data = await editProduct(id, updatedProduct);
      setProducts(
        products.map((product) => (product._id === id ? data : product)),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <ProductList
          products={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <AddForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
