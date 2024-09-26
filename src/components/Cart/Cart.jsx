// Cart.jsx
import React from 'react';
import Menu from '../Menu/Menu'; // Correct path to Menu.jsx
import './Cart.css';
import { useCart } from '../../CartContext'; // Import the useCart hook

const Cart = () => {
  const { cartItems, removeItemFromCart, addItemToCart } = useCart(); // Use context

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price.slice(1)) * item.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: {item.price} - Total: ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                <button onClick={() => removeItemFromCart(item)}>Remove</button> {/* Button to remove item */}
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Menu addToCart={addItemToCart} /> {/* Pass the addToCart function to Menu */}
    </div>
  );
};

export default Cart;
