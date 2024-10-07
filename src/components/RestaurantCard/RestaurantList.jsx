import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import AddRestaurant from './AddRestaurant'; // Import AddRestaurant component
import './RestaurantCard.css';

const initialRestaurants = [
  { id: 1, name: 'Almond House', rating: '4.5', description: 'Best Sweets' },
  { id: 2, name: 'Bawarchi', rating: '4.2', description: 'Famous Biryani' },
  { id: 3, name: 'Cream Stone', rating: '4.7', description: 'Ice Cream Heaven' },
  { id: 4, name: 'Dominos Pizza', rating: '4.6', description: 'Work hard, Be nice, Eat pizza' },
  { id: 5, name: 'Shah Ghouse', rating: '4.3', description: 'Hyderabadi Biryani' },
  { id: 6, name: 'Paradise', rating: '4.3', description: 'World’s Favourite Biryani' }
];

const RestaurantList = ({ searchQuery }) => {
  const [restaurants, setRestaurants] = useState(initialRestaurants); // Update to allow dynamic restaurant list

  // Function to add a new restaurant to the list
  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, { ...newRestaurant, id: restaurants.length + 1 }]);
  };

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

      {/* Add Restaurant Form */}
      <AddRestaurant onAddRestaurant={handleAddRestaurant} /> {/* Pass the add function to AddRestaurant */}
    </div>
  );
};

export default RestaurantList;
