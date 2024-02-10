const Product = ({ product, onEditFormToggle, onDelete }) => {
  const handleEditFormToggle = onEditFormToggle;
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{`$${product.price}`}</p>
        <p className="quantity">{`${product.quantity} left in stock`}</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleEditFormToggle}>
            Edit
          </button>
        </div>
        <button
          className="delete-button"
          onClick={() => handleDelete(product._id)}
        >
          <span>X</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
