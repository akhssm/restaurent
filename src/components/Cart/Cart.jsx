// Cart.jsx
import React from 'react';
import './Cart.css'

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Pizza", price: "$10" },
    { id: 2, name: "Chicken Biryani", price: "$12" }
  ];

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <button>Remove</button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
