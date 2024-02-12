import Header from "./Header";
import ProductList from "./ProductList";
import AddForm from "./AddForm";
import { useState, useEffect } from "react";

import {
  createProduct,
  getProducts,
  deleteProduct,
  editProduct,
  getCart,
  addToCart,
  checkout,
} from "../services/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart();
      setCart(data);
    };
    fetchCart();
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

  const handleAddToCart = async (id) => {
    try {
      const { item } = await addToCart(id);

      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem._id === item._id,
      );

      if (existingItemIndex >= 0) {
        setCart((prevCart) =>
          prevCart.map((cartItem, index) => {
            if (index === existingItemIndex) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              };
            }
            return cartItem;
          }),
        );
      } else {
        setCart((prevCart) => [...prevCart, item]);
      }

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === item.productId
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Header cart={cart} onCheckout={handleCheckout} />
      <main>
        <ProductList
          products={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAddToCart={handleAddToCart}
        />
        <AddForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
