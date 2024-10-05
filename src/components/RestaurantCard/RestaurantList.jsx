import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from '../RestaurantForm/RestaurantForm';
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
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Function to add a new restaurant
  const addRestaurant = (newRestaurant) => {
    const newId = restaurants.length + 1;
    setRestaurants([...restaurants, { id: newId, ...newRestaurant }]);
  };

  // Function to edit an existing restaurant
  const editRestaurant = (updatedRestaurant) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === currentRestaurant.id ? { ...currentRestaurant, ...updatedRestaurant } : restaurant
      )
    );
    setCurrentRestaurant(null);
    setIsEditing(false);
  };

  // Function to handle form submission
  const handleFormSubmit = (restaurant) => {
    if (isEditing) {
      editRestaurant(restaurant);
    } else {
      addRestaurant(restaurant);
    }
  };

  // Function to handle restaurant edit
  const handleEditClick = (restaurant) => {
    setCurrentRestaurant(restaurant);
    setIsEditing(true);
  };

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="restaurant-cards-container">
      <RestaurantForm 
        currentRestaurant={currentRestaurant} 
        onSubmit={handleFormSubmit} 
      />
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map(restaurant => (
          <div key={restaurant.id}>
            <RestaurantCard 
              id={restaurant.id} 
              name={restaurant.name} 
              rating={restaurant.rating} 
              description={restaurant.description} 
            />
            <button onClick={() => handleEditClick(restaurant)}>Edit</button>
          </div>
        ))
      ) : (
        <p>No restaurants found</p>
      )}
    </div>
  );
};

export default RestaurantList;
