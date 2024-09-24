// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Restaurant Website Name</h1>
      <input type="text" placeholder="Search" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
