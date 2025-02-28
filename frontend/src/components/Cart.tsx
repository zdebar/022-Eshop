import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(function (item) {
            return (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={function () { removeFromCart(item.id); }}>Remove</button>
              </div>
            );
          })}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}
