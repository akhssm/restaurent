// src/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // State to hold cart items

    // Function to add an item to the cart
    const addItemToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Function to remove an item from the cart
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== itemToRemove.id)
        );
    };

    // Function to increase the quantity of an item
    const increaseQuantity = (item) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ));
    };

    // Function to decrease the quantity of an item
    const decreaseQuantity = (item) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === item.id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
