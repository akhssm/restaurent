// src/components/Cart/Cart.jsx
import React from 'react';
import Menu from '../Menu/Menu'; // Correct path to Menu.jsx
import './Cart.css';
import { useCart } from '../CartContext/CartContext'; // Import the useCart hook

const Cart = () => {
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Use context

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.slice(1)) * item.quantity; // Correctly parse the price
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Price: {item.price} - Quantity: {item.quantity} - Total: $
                {(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                <div>
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <button onClick={() => removeItemFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Menu addToCart={addItemToCart}/> {/* Menu component to continue shopping */}
    </div>
  );
};

export default Cart;
