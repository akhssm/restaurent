// AddRestaurant.jsx
import React, { useState } from 'react';

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    rating: '',
    description: '',
  });

  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Restaurant:', restaurant); 
    // Add logic to update the restaurant list or API call to save the restaurant
  };

  return (
    <div className="add-restaurant">
      <h2>Add New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Restaurant Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={restaurant.name} 
            onChange={handleChange} 
            required
          />
        </div>

        <div>
          <label htmlFor="rating">Rating</label>
          <input 
            type="text" 
            id="rating" 
            name="rating" 
            value={restaurant.rating} 
            onChange={handleChange} 
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description" 
            name="description" 
            value={restaurant.description} 
            onChange={handleChange} 
            required
          />
        </div>

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
