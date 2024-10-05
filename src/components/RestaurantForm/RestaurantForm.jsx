// RestaurantForm.jsx
import React, { useState, useEffect } from 'react';
import './RestaurantForm.css';

const RestaurantForm = ({ currentRestaurant, onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentRestaurant) {
      setName(currentRestaurant.name);
      setRating(currentRestaurant.rating);
      setDescription(currentRestaurant.description);
    } else {
      setName('');
      setRating('');
      setDescription('');
    }
  }, [currentRestaurant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, rating, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Restaurant Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        step="0.1" 
        min="0" 
        max="5" 
        placeholder="Rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">
        {currentRestaurant ? 'Edit Restaurant' : 'Add Restaurant'}
      </button>
    </form>
  );
};

export default RestaurantForm;
