import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search based on location
  const handleSearch = () => {
    if (location.pathname === '/') {
      // If on the home page, assume searching restaurants
      navigate(`/search-restaurants?q=${searchQuery}`);
    } else {
      // If on any restaurant's menu page, assume searching menu items
      navigate(`${location.pathname}?q=${searchQuery}`);
    }
  };

  // Function to navigate back to the home page
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="restaurant-name">
        <h1>Dummy Restaurant Name</h1>
      </div>

      {/* Conditionally render the search bar only if not on the login page */}
      {location.pathname !== '/login' && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search restaurants or items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <nav>
        {/* Conditional rendering for the navigation links */}
        <ul>
          {location.pathname === '/login' ? (
            <li>
              <button onClick={handleHomeClick}>Home</button>
            </li>
          ) : (
            <>
              <li><a href="/">Home</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/login">Login</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
