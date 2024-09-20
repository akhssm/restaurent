import React from 'react';

const RestaurantCard = ({ name, rating }) => {
  return (
    <div className="restaurant-card">
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default RestaurantCard;
