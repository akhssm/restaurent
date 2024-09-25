import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; // Import your CSS file for styling

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search based on location
  const handleSearch = () => {
    if (location.pathname === '/') {
      navigate(`/search-restaurants?q=${searchQuery}`);
    } else {
      navigate(`${location.pathname}?q=${searchQuery}`);
    }
  };

  // Do not render Header on login or signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <header>
      <div className="restaurant-name">
        <h1>Dummy Restaurant Name</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants or items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Home Link */}
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
