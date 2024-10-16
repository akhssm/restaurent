// src/components/Menu/AddItem.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyMenus } from './Menu'; // Import dummyMenus

const AddItem = () => {
  const { id } = useParams(); // Get restaurant ID from URL
  const navigate = useNavigate(); // For navigation
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });

  // Handle input changes
  const handleNewItemChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  // Add new item to the menu
  const handleAddNewItem = (event) => {
    event.preventDefault();
    if (newItem.name && newItem.quantity && newItem.price) {
      const newId = (dummyMenus[id]?.length || 0) + 1; // Generate new id
      const itemToAdd = { id: newId, ...newItem };
      dummyMenus[id] = [...(dummyMenus[id] || []), itemToAdd]; // Update the dummyMenus
      alert(`${newItem.name} has been added to the menu!`); // Notify user
      navigate(`/menu/${id}`); // Navigate back to the Menu page
    } else {
      alert("Please fill in all fields!"); // Alert if fields are empty
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddNewItem}>
        <input
          type="text"
          name="name"
          placeholder="Food Item Name"
          value={newItem.name}
          onChange={handleNewItemChange}
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleNewItemChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleNewItemChange}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
