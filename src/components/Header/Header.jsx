import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import necessary functions
import './Header.css'; // Import your CSS file for styling

function Header({ setSearchQuery }) {
  const location = useLocation(); // Get the current path
  const [inputValue, setInputValue] = useState('');

  // Handle search based on input value
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <header>
      <div className="restaurant-name">
        <h1>Dummy Restaurant Name</h1>
      </div>

      {/* Render the search bar only if not on login or signup pages */}
      {(location.pathname !== '/login' && location.pathname !== '/signup') && (
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search restaurants or items..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
      )}

      <nav>
        <ul>
          {/* Home button should always be displayed */}
          <li><Link to="/">Home</Link></li>

          {/* Show other links only if not on login or signup pages */}
          {location.pathname !== '/login' && location.pathname !== '/signup' && (
            <>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
