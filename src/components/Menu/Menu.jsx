import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Menu.css';
import { useCart } from '../CartContext/CartContext'; // Adjust path as needed

// Dummy data for restaurant menus
export const dummyMenus = {
  1: [
    { id: 1, name: 'Almonds', quantity: '250g', price: '$10' },
    { id: 2, name: 'Cashews', quantity: '250g', price: '$12' },
    { id: 3, name: 'Pistachios', quantity: '250g', price: '$15' },
    { id: 4, name: 'Walnuts', quantity: '250g', price: '$18' },
    { id: 5, name: 'Mixed Dry Fruits', quantity: '500g', price: '$20' },
    { id: 6, name: 'Kaju Katli', quantity: '250g', price: '$22' },
  ],
  2: [
    { id: 7, name: 'Chicken Biryani', quantity: '1 Plate', price: '$8' },
    { id: 8, name: 'Mutton Biryani', quantity: '1 Plate', price: '$10' },
    { id: 9, name: 'Paneer Biryani', quantity: '1 Plate', price: '$7' },
    { id: 10, name: 'Chicken Kebab', quantity: '6 Pieces', price: '$5' },
    { id: 11, name: 'Mutton Kebab', quantity: '6 Pieces', price: '$6' },
    { id: 12, name: 'Vegetable Korma', quantity: '1 Plate', price: '$6' },
  ],
  3: [
    { id: 13, name: 'Vanilla Ice Cream', quantity: '1 Scoop', price: '$3' },
    { id: 14, name: 'Chocolate Ice Cream', quantity: '1 Scoop', price: '$4' },
    { id: 15, name: 'Strawberry Ice Cream', quantity: '1 Scoop', price: '$4' },
    { id: 16, name: 'Mango Sorbet', quantity: '1 Scoop', price: '$5' },
  ],
  4: [
    { id: 17, name: 'Margherita Pizza', quantity: '1 Medium', price: '$12' },
    { id: 18, name: 'Pepperoni Pizza', quantity: '1 Medium', price: '$14' },
    { id: 19, name: 'BBQ Chicken Pizza', quantity: '1 Medium', price: '$16' },
    { id: 20, name: 'Vegetable Pizza', quantity: '1 Medium', price: '$10' },
  ],
  5: [
    { id: 21, name: 'Chicken Biryani', quantity: '1 Plate', price: '$10' },
    { id: 22, name: 'Mutton Biryani', quantity: '1 Plate', price: '$12' },
    { id: 23, name: 'Hyderabadi Dum Biryani', quantity: '1 Plate', price: '$15' },
    { id: 24, name: 'Paneer Biryani', quantity: '1 Plate', price: '$9' },
  ],
  6: [
    { id: 25, name: 'Veg Pulao', quantity: '1 Plate', price: '$7' },
    { id: 26, name: 'Chicken Pulao', quantity: '1 Plate', price: '$9' },
    { id: 27, name: 'Mutton Pulao', quantity: '1 Plate', price: '$11' },
    { id: 28, name: 'Kashmiri Pulao', quantity: '1 Plate', price: '$12' },
  ],
};

// Mapping of restaurant names
const restaurantNames = {
  1: 'Almond House',
  2: 'Bawarchi',
  3: 'Cream Stone',
  4: 'Dominos Pizza',
  5: 'Shah Ghouse',
  6: 'Paradise',
};

const Menu = () => {
  const { id } = useParams();
  const menuItems = dummyMenus[id] || []; // Fetch menu based on the restaurant ID
  const restaurantName = restaurantNames[id]; // Get restaurant name from mapping
  const { addToCart } = useCart(); // Use the cart context

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter menu items based on the search query
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="menu-container">
      <h2>Menu for {restaurantName}</h2>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search for items..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="item-info">
                {item.name} - {item.quantity} - {item.price}
              </div>
              <div className="menu-buttons">
                <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
                <Link to={`/edit-menu/${id}/${item.id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
