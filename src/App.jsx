import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // For routing
import Header from './components/Header/Header';  // Adjust the paths if needed
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'; // Import Cart component
import Menu from './components/Menu/Menu'; // Import Menu component
import RestaurantList from './components/RestaurantCard/RestaurantList'; // Import the RestaurantList component
import Login from './components/Login/Login'; // Import the Login component
import Signup from './components/Signup/Signup'; // Import the Signup component

// Create a function to use location inside the Router
function App() {
  // Create state to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <AppRoutes searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Router>
  );
}

const AppRoutes = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation(); // Now this is correctly within the Router context

  return (
    <div>
      {/* Define Routes */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <Header setSearchQuery={setSearchQuery} />
            <RestaurantList searchQuery={searchQuery} />
          </>
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
          <>
            <Header />
            <Login />
          </>
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
