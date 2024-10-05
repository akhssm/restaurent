import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu'; 
import RestaurantList from './components/RestaurantCard/RestaurantList'; 
import Login from './components/Login/Login'; 
import Signup from './components/Signup/Signup'; 
import RestaurantEdit from './components/RestaurantForm/RestaurantEdit'; // Import RestaurantEdit
import { CartProvider } from './CartContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userEmail, setUserEmail] = useState(null);
  const [restaurants, setRestaurants] = useState([]); // State to manage restaurants

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setIsLoggedIn(true);
      setUserEmail(savedEmail);
    }

    // Fetch initial restaurant data, replace with API call if needed
    const initialRestaurants = [
      { id: 1, name: 'Almond House', rating: '4.5', description: 'Best Sweets' },
      { id: 2, name: 'Bawarchi', rating: '4.2', description: 'Famous Biryani' },
      { id: 3, name: 'Cream Stone', rating: '4.7', description: 'Ice Cream Heaven' },
      { id: 4, name: 'Dominos Pizza', rating: '4.6', description: 'Work hard, Be nice, Eat pizza' },
      { id: 5, name: 'Shah Ghouse', rating: '4.3', description: 'Hyderabadi Biryani' },
      { id: 6, name: 'Paradise', rating: '4.3', description: 'World’s Favourite Biryani' }
    ];
    setRestaurants(initialRestaurants);
  }, []);

  const handleUpdateRestaurant = (updatedRestaurant) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      )
    );
  };

  return (
    <CartProvider>
      <Router>
        <AppRoutes 
          isLoggedIn={isLoggedIn} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          setIsLoggedIn={setIsLoggedIn}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          restaurants={restaurants} // Pass restaurants to routes
          onUpdateRestaurant={handleUpdateRestaurant} // Pass update function to routes
        />
      </Router>
    </CartProvider>
  );
}

// Separate component to handle all routes
const AppRoutes = ({ isLoggedIn, searchQuery, setSearchQuery, setIsLoggedIn, userEmail, setUserEmail, restaurants, onUpdateRestaurant }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={isLoggedIn ? (
          <>
            <Header 
              setSearchQuery={setSearchQuery} 
              userEmail={userEmail} 
              setIsLoggedIn={setIsLoggedIn} 
              setUserEmail={setUserEmail}
            />
            <RestaurantList 
              searchQuery={searchQuery} 
              restaurants={restaurants} // Pass restaurants to the list
              onEdit={onUpdateRestaurant} // Pass the update function for edit
            />
          </>
        ) : (
          <Navigate to="/login" />
        )} />

        <Route path="/cart" element={(
          <>
            <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
            <Cart />
          </>
        )} />

        <Route path="/menu/:id" element={(
          <>
            <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
            <Menu />
          </>
        )} />

        <Route path="/login" element={(
          <>
            <Header hideElements={true} />
            <Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
          </>
        )} />

        <Route path="/signup" element={(
          <>
            <Header hideElements={true} />
            <Signup />
          </>
        )} />

        {/* Edit restaurant route */}
        <Route path="/edit/:id" element={(
          <>
            <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
            <RestaurantEdit 
              onUpdateRestaurant={onUpdateRestaurant} // Pass the update function to RestaurantEdit
              restaurants={restaurants} // Pass restaurants data
            />
          </>
        )} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
