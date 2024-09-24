// RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

// Import images from the assets folder
import restaurant1 from '../../assets/Almondhouse.png';
import restaurant2 from '../../assets/Bawarchi.jpg';
import restaurant3 from '../../assets/Creamstone.jpg';
import restaurant4 from '../../assets/Dominos.png';
import restaurant5 from '../../assets/Paradise.jpg';
import restaurant6 from '../../assets/Shahghouse.jpg';

const restaurantImages = {
  1: restaurant1,
  2: restaurant2,
  3: restaurant3,
  4: restaurant4,
  5: restaurant5,
  6: restaurant6
};

const RestaurantCard = ({ id, name, rating, description }) => {
  return (
    <div className="restaurant-card">
      {/* Dynamically display the restaurant image based on ID */}
      <Link to={`/menu/${id}`}>
        <img src={restaurantImages[id]} alt={name} className="restaurant-img" />
      </Link>
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
