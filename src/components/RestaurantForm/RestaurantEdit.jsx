// RestaurantEdit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantForm from './RestaurantForm'; 

const RestaurantEdit = ({ onUpdateRestaurant }) => { // Receive onUpdateRestaurant as a prop
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch restaurant data based on ID
    const restaurants = [
      { id: 1, name: 'Almond House', rating: '4.5', description: 'Best Sweets' },
      { id: 2, name: 'Bawarchi', rating: '4.2', description: 'Famous Biryani' },
      { id: 3, name: 'Cream Stone', rating: '4.7', description: 'Ice Cream Heaven' },
      { id: 4, name: 'Dominos Pizza', rating: '4.6', description: 'Work hard, Be nice, Eat pizza' },
      { id: 5, name: 'Shah Ghouse', rating: '4.3', description: 'Hyderabadi Biryani' }, 
      { id: 6, name: 'Paradise', rating: '4.3', description: 'World’s Favourite Biryani' }
    ];
    const restaurantData = restaurants.find((r) => r.id === parseInt(id));
    if (restaurantData) {
      setRestaurant(restaurantData);
    }
  }, [id]);

  const handleFormSubmit = (updatedRestaurant) => {
    console.log('Updated restaurant:', updatedRestaurant);
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
