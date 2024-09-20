import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Restaurant Website Name</h1>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
      <div>
        <span>Login</span> | <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;
