// Menu.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const menus = {
  1: [
    { id: 1, name: "Margherita Pizza", price: "$10" },
    { id: 2, name: "Pepperoni Pizza", price: "$12" }
  ],
  2: [
    { id: 1, name: "Classic Burger", price: "$8" },
    { id: 2, name: "Cheeseburger", price: "$9" }
  ]
  // Add menus for other restaurants
};

const Menu = () => {
  const { id } = useParams(); // Get restaurant ID from URL
  const menuItems = menus[id] || [];

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
