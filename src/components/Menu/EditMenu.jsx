// EditMenu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditMenu.css';
import { dummyMenus } from './Menu'; // Ensure this path is correct

const EditMenu = () => {
  const { id, itemId } = useParams(); // Capture both restaurant id and menu item id
  const navigate = useNavigate();
  const [editedItem, setEditedItem] = useState({
    name: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    const menuItems = dummyMenus[id] || []; // Access the specific menu items for the restaurant
    const itemToEdit = menuItems.find(item => item.id === parseInt(itemId)); // Find the item to edit by ID
    
    if (itemToEdit) {
      setEditedItem({
        name: itemToEdit.name,
        quantity: itemToEdit.quantity,
        price: itemToEdit.price,
      });
    }
  }, [id, itemId]);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!editedItem.name || !editedItem.quantity || !editedItem.price) {
      alert("All fields are required.");
      return;
    }

    // Update the specific menu item in the dummyMenus object
    const updatedMenuItems = dummyMenus[id].map((item) =>
      item.id === parseInt(itemId)
        ? { ...item, ...editedItem } // Apply the edited values
        : item
    );

    dummyMenus[id] = updatedMenuItems; // Update the dummy data for the menu
    navigate(`/menu/${id}`); // Redirect back to the restaurant's menu page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleCancel = () => {
    navigate(`/menu/${id}`); // Redirect back to the menu page if cancel is clicked
  };

  return (
    <div className="edit-menu-container">
      <h3>Edit Menu Item</h3>
      <form onSubmit={handleEditSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={editedItem.price}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-actions">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditMenu;
