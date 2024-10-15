// src/components/Cart/AddToCart.jsx
import React from 'react';
import { useCart } from '../CartContext/CartContext'; // Import the useCart hook

const AddToCart = ({ item }) => {
  const { addItemToCart } = useCart(); // Use context

  return (
    <button onClick={() => addItemToCart(item)}>Add to Cart</button>
  );
};

export default AddToCart;
