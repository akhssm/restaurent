import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu'; 
import RestaurantList from './components/RestaurantCard/RestaurantList'; 
import Login from './components/Login/Login'; 
import Signup from './components/Signup/Signup'; 
import { CartProvider } from './CartContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <Router>
        <AppRoutes 
          isLoggedIn={isLoggedIn} // Pass isLoggedIn to AppRoutes
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn to routes
        />
      </Router>
    </CartProvider>
  );
}

const AppRoutes = ({ isLoggedIn, searchQuery, setSearchQuery, setIsLoggedIn }) => {
  const location = useLocation();

  return (
    <div>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          isLoggedIn ? ( // Show home only if logged in
            <>
              <Header setSearchQuery={setSearchQuery} />
              <RestaurantList searchQuery={searchQuery} />
            </>
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} /> // Redirect to login if not logged in
          )
        } />

        {/* Cart Route */}
        <Route path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />

        {/* Menu Route */}
        <Route path="/menu/:id" element={
          <>
            <Header />
            <Menu />
          </>
        } />

        {/* Login Route */}
        <Route path="/login" element={
          <Login setIsLoggedIn={setIsLoggedIn} /> // Pass setIsLoggedIn to Login
        } />

        {/* Signup Route */}
        <Route path="/signup" element={
          <>
            <Header />
            <Signup />
          </>
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
