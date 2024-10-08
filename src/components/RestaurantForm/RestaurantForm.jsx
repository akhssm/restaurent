import React, { useState } from 'react';

const RestaurantForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Submit the updated data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <input 
          type="text" 
          id="rating" 
          name="rating" 
          value={formData.rating} 
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleChange}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default RestaurantForm;
