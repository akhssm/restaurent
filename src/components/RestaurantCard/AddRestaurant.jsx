import React, { useState } from 'react';

const AddRestaurant = ({ onAddRestaurant }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // New state for image URL

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new restaurant object
    const newRestaurant = {
      id: Date.now(),
      name,
      description,
      rating: parseFloat(rating),
      image: imageUrl, // Use imageUrl input from the user
    };

    onAddRestaurant(newRestaurant);

    // Reset form fields after submission
    setName('');
    setDescription('');
    setRating('');
    setImageUrl(''); // Clear image URL input after submission
  };

  return (
    <div className="add-restaurant-form">
      <h2>Add New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} // Capture image URL input
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
