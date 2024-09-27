import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ setSearchQuery, userEmail, setIsLoggedIn, setUserEmail, hideElements }) {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const userName = userEmail ? userEmail.split('@')[0] : '';

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setIsLoggedIn(false);
    setUserEmail(null);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="restaurant-name">
        <h1>Dummy Restaurant Name</h1>
      </div>

      {/* Conditionally render search bar and navigation based on hideElements prop */}
      {!hideElements && (
        <>
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

          <nav>
            <ul>
              <li><a href="/cart">Cart</a></li>
              {!userEmail && <li><a href="/login">Login</a></li>}
            </ul>
          </nav>
        </>
      )}

      {userEmail && (
        <div className="user-info">
          <button className="profile-btn" onClick={toggleDropdown}>
            {userName} <i className="arrow-down"></i>
          </button>
          {showDropdown && (
            <div className="dropdown">
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
