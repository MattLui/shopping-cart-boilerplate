import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleVisibilityButtonClick = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      quantity
    };
    onSubmit(newProduct, reset);
  };
  const reset = () => {
    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className={formVisible ? "add-form visible" : "add-form"}>
      <p>
        <button
          className="add-product-button"
          onClick={handleVisibilityButtonClick}
        >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input 
            type="text"
            onChange={(e) => setName(e.targetvalue)} 
            id="product-name" 
            name="product-name" required 
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
          <button type="button" onClick={handleVisibilityButtonClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
