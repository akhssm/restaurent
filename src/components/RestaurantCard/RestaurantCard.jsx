// RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css'

const RestaurantCard = ({ id, name, rating, description }) => {
  return (
    <div className="restaurant-card">
      <img src="placeholder.jpg" alt={`${name}`} />
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
