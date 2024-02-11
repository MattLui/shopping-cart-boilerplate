const Header = ({ cart, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Total: $
              {cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}
            </p>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
        <button
          className="checkout"
          disabled={cart.length === 0}
          onClick={onCheckout}
        >
          Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;
