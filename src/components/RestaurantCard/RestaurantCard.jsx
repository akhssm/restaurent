// RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

// Import images from the assets folder
import restaurant1 from '../../assets/Almondhouse.png';
import restaurant2 from '../../assets/Bawarchi.png';
import restaurant3 from '../../assets/Creamstone.jpg';
import restaurant4 from '../../assets/Paradise.jpg';
import restaurant5 from '../../assets/Shahghouse.jpg';

// Add more imports as needed

const restaurantImages = {
  1: restaurant1,
  2: restaurant2,
  3: restaurant3,
  4: restaurant4,
  5: restaurant5
  // Map other restaurant IDs to their corresponding images
};

const RestaurantCard = ({ id, name, rating, description }) => {
  return (
    <div className="restaurant-card">
      {/* Use the image based on the restaurant ID */}
      <img src={restaurantImages[id]} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      {/* Link to the restaurant's menu */}
      <Link to={`/menu/${id}`}>
        <button>View Menu</button>
      </Link>
    </div>
  );
};

export default RestaurantCard;
