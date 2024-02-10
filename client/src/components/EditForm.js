import { useState } from "react";

const EditForm = ({ product, onEditFormToggle, onEdit }) => {
  const handleToggleEditForm = onEditFormToggle;

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      quantity,
    };
    onEdit(product._id, updatedProduct);
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
