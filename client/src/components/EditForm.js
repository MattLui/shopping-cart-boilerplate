import { useState, useEffect } from "react";

const EditForm = ({ product, onEditFormToggle, onEdit }) => {
  const handleToggleEditForm = onEditFormToggle;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setQuantity(product.quantity);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity,
    };
    onEdit(product._id, newProduct);
    handleToggleEditForm();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            aria-label="Product Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={() => onEdit(product._id, product)}>
            Update
          </button>
          <button type="button" onClick={handleToggleEditForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
