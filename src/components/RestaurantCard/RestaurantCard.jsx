import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

import restaurant1 from '../../assets/Almondhouse.png';
import restaurant2 from '../../assets/Bawarchi.jpg';
import restaurant3 from '../../assets/Creamstone.jpg';
import restaurant4 from '../../assets/Dominos.png';
import restaurant5 from '../../assets/Shahghouse.jpg';
import restaurant6 from '../../assets/Paradise.jpg';

const restaurantImages = {
  1: restaurant1,
  2: restaurant2,
  3: restaurant3,
  4: restaurant4,
  5: restaurant5,
  6: restaurant6,
};

const RestaurantCard = ({ id, name, rating, description, image, showEditButton }) => {
  // Check if the restaurant has a predefined image, otherwise use the provided image or a placeholder
  const imageSrc = restaurantImages[id] || image || 'https://via.placeholder.com/150'; // Use placeholder if no image is provided

  return (
    <div className="restaurant-card">
      <Link to={`/menu/${id}`}>
        <img src={imageSrc} alt={name} className="restaurant-img" /> {/* Render image correctly */}
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to={`/menu/${id}`}>
        <button>View Menu</button>
      </Link>
      {showEditButton && (
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
      )}
    </div>
  );
};

export default RestaurantCard;
