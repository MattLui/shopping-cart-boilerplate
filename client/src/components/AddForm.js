import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleToggleAddForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity,
    };
    onSubmit(newProduct, reset);
  };
  const reset = () => {
    setTitle("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className={isFormVisible ? "add-form visible" : "add-form"}>
      <p>
        <button className="add-product-button" onClick={handleToggleAddForm}>
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="product-name"
            name="product-name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleToggleAddForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
