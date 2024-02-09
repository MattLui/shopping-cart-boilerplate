import EditableProduct from "./EditableProduct";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <EditableProduct key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
