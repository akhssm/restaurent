import React, { useState } from 'react';
import Menu from '../Menu/Menu'; // Correct path to Menu.jsx
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id); // Use item id to check
    
    if (existingItem) {
      // If it exists, increase the quantity
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id // Check by item id
          ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increment quantity
          : cartItem
      ));
    } else {
      // If it doesn't exist, add the item to the cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    alert(`${item.name} has been added to your cart!`); // Optional alert
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price.slice(1)) * item.quantity); // Update to calculate total for each item
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}> {/* Use item.id as the key */}
                {item.name} - Quantity: {item.quantity} - Price: {item.price} - Total: ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3> {/* Display total amount */}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Menu addToCart={addToCart} /> {/* Pass the addToCart function to Menu */}
    </div>
  );
};

export default Cart;
