import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Menu.css';

// Dummy data for restaurant menus
const dummyMenus = {
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
    { id: 13, name: 'Vanilla Ice Cream', quantity: '2 Scoops', price: '$3' },
    { id: 14, name: 'Chocolate Ice Cream', quantity: '2 Scoops', price: '$4' },
    { id: 15, name: 'Strawberry Ice Cream', quantity: '2 Scoops', price: '$4' },
    { id: 16, name: 'Mango Ice Cream', quantity: '2 Scoops', price: '$3.5' },
    { id: 17, name: 'Butterscotch Ice Cream', quantity: '2 Scoops', price: '$4.5' },
    { id: 18, name: 'Rocky Road Ice Cream', quantity: '2 Scoops', price: '$5' },
  ],
  4: [
    { id: 19, name: 'Margherita Pizza', quantity: 'Medium', price: '$7' },
    { id: 20, name: 'Pepperoni Pizza', quantity: 'Medium', price: '$9' },
    { id: 21, name: 'BBQ Chicken Pizza', quantity: 'Large', price: '$12' },
    { id: 22, name: 'Veggie Supreme Pizza', quantity: 'Medium', price: '$8' },
    { id: 23, name: 'Garlic Breadsticks', quantity: '6 Pieces', price: '$5' },
    { id: 24, name: 'Cheesy Pasta', quantity: '1 Plate', price: '$6' },
  ],
  5: [
    { id: 25, name: 'Hyderabadi Chicken Biryani', quantity: '1 Plate', price: '$9' },
    { id: 26, name: 'Hyderabadi Mutton Biryani', quantity: '1 Plate', price: '$11' },
    { id: 27, name: 'Paneer Biryani', quantity: '1 Plate', price: '$8' },
    { id: 28, name: 'Chicken 65', quantity: '1 Plate', price: '$6' },
    { id: 29, name: 'Double Ka Meetha', quantity: '1 Plate', price: '$4' },
    { id: 30, name: 'Vegetable Pakora', quantity: '6 Pieces', price: '$3' },
  ],
  6: [
    { id: 31, name: 'Mutton Biryani', quantity: '1 Plate', price: '$10' },
    { id: 32, name: 'Chicken Biryani', quantity: '1 Plate', price: '$8' },
    { id: 33, name: 'Veg Biryani', quantity: '1 Plate', price: '$7' },
    { id: 34, name: 'Sheekh Kebab', quantity: '6 Pieces', price: '$6' },
    { id: 35, name: 'Shahi Tukda', quantity: '1 Plate', price: '$4' },
    { id: 36, name: 'Kachchi Biryani', quantity: '1 Plate', price: '$12' },
  ],
};

// Mapping of restaurant names
const restaurantNames = {
  1: 'Almond House',
  2: 'Bawarchi',
  3: 'Cream Stone',
  4: 'Paradise',
  5: 'Shah Ghouse',
  6: 'Shah Ghouse',
};

const Menu = ({ addToCart }) => {
  const { id } = useParams();
  const menuItems = dummyMenus[id] || []; // Fetch menu based on the restaurant ID
  const restaurantName = restaurantNames[id]; // Get restaurant name from mapping

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

      {/* Display matching menu items */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </ul>
    </div>
  );
};

export default Menu;
