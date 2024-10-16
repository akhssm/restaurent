import React, { useEffect } from 'react';
import './Cart.css';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Use useEffect to re-render the Cart component when cartItems changes
  useEffect(() => {
    // You can add any other side effects or logic here
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.slice(1)) * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Price: {item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <span>
                  Total: ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItemFromCart(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;