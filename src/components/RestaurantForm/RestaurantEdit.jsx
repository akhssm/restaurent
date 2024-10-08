import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantForm from './RestaurantForm'; 

const RestaurantEdit = ({ onUpdateRestaurant, restaurants }) => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch restaurant data based on ID
    const restaurantData = restaurants.find((r) => r.id === parseInt(id));
    if (restaurantData) {
      setRestaurant(restaurantData);
    }
  }, [id, restaurants]);

  const handleFormSubmit = (updatedRestaurant) => {
    onUpdateRestaurant(updatedRestaurant); // Call the onUpdateRestaurant to update the restaurant
    navigate('/'); // Redirect to home after update
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      {restaurant ? (
        <RestaurantForm 
          initialData={restaurant} 
          onSubmit={handleFormSubmit} 
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestaurantEdit;
