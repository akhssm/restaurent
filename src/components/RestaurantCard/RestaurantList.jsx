import React from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantCard.css'; // Import the CSS file for the container

const restaurants = [
  { id: 1, name: 'Almond House', rating: '4.5', description: 'Best Sweets' },
  { id: 2, name: 'Bawarchi', rating: '4.2', description: 'Famous Biryani' },
  { id: 3, name: 'Cream Stone', rating: '4.7', description: 'Ice Cream Heaven' },
  { id: 4, name: 'Paradise', rating: '4.6', description: 'Legendary Biryani' },
  { id: 5, name: 'Shah Ghouse', rating: '4.3', description: 'Hyderabadi Biryani' },
  // Add more restaurants as needed
];

const RestaurantList = () => {
  return (
    <div className="restaurant-cards-container">
      {restaurants.map(restaurant => (
        <RestaurantCard 
          key={restaurant.id} 
          id={restaurant.id} 
          name={restaurant.name} 
          rating={restaurant.rating} 
          description={restaurant.description} 
        />
      ))}
    </div>
  );
};

export default RestaurantList;
