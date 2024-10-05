// RestaurantForm.jsx
import React, { useState, useEffect } from 'react';

const RestaurantForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || '');
  const [rating, setRating] = useState(initialData.rating || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, rating, description });
  };

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setRating(initialData.rating);
      setDescription(initialData.description);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Rating:</label>
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestaurantForm;
