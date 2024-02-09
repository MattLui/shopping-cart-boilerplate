import Header from "./Header";
import ProductList from "./ProductList";
import AddForm from "./AddForm";
import { useState, useEffect } from "react";

import {
  createProduct,
  getProducts
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
      console.error(e)
    }
  }

  return (
    <div>
      <Header />
      <main>
        <ProductList products={products} />
        <AddForm onSubmit={handleSubmit}/>
      </main>
    </div>
  );
};

export default App;
