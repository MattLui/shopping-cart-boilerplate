import EditableProduct from "./EditableProduct";

const ProductList = ({ products, onDelete, onEdit, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <EditableProduct
            key={product._id}
            product={product}
            onDelete={onDelete}
            onEdit={onEdit}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
