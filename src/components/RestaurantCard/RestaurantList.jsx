import React from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantCard.css';

const RestaurantList = ({ searchQuery, restaurants, onUpdateRestaurant }) => {
  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>

      {/* Display filtered restaurants */}
      <div className="restaurant-cards-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id} 
              id={restaurant.id} 
              name={restaurant.name} 
              rating={restaurant.rating} 
              description={restaurant.description} 
              showEditButton={true} // Pass true to show the Edit button
            />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
