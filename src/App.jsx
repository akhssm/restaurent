// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import EditMenu from './components/Menu/EditMenu'; // Route for EditMenu
import RestaurantList from './components/RestaurantCard/RestaurantList';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RestaurantEdit from './components/RestaurantForm/RestaurantEdit';
import AddRestaurant from './components/RestaurantCard/AddRestaurant'; // Corrected path for AddRestaurant component
import { CartProvider } from './components/CartContext/CartContext'; // Correct path

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userEmail, setUserEmail] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setIsLoggedIn(true);
      setUserEmail(savedEmail);
    }

    // Fetch initial restaurant data
    const fetchRestaurants = () => {
      return [
        { id: 1, name: 'Almond House', rating: '4.5', description: 'Best Sweets' },
        { id: 2, name: 'Bawarchi', rating: '4.2', description: 'Famous Biryani' },
        { id: 3, name: 'Cream Stone', rating: '4.7', description: 'Ice Cream Heaven' },
        { id: 4, name: 'Dominos Pizza', rating: '4.6', description: 'Work hard, Be nice, Eat pizza' },
        { id: 5, name: 'Shah Ghouse', rating: '4.3', description: 'Hyderabadi Biryani' },
        { id: 6, name: 'Paradise', rating: '4.3', description: 'World’s Favourite Biryani' }
      ];
    };

    setRestaurants(fetchRestaurants());
  }, []);

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      { ...newRestaurant, id: prevRestaurants.length + 1 }
    ]);
  };

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
          restaurants={restaurants}
          onAddRestaurant={handleAddRestaurant} // Pass the add handler
          onUpdateRestaurant={handleUpdateRestaurant} // Pass the update handler
        />
      </Router>
    </CartProvider>
  );
}

const AppRoutes = ({ isLoggedIn, searchQuery, setSearchQuery, setIsLoggedIn, userEmail, setUserEmail, restaurants, onAddRestaurant, onUpdateRestaurant }) => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? (
            <>
              <Header 
                setSearchQuery={setSearchQuery} 
                userEmail={userEmail} 
                setIsLoggedIn={setIsLoggedIn} 
                setUserEmail={setUserEmail}
              />
              <RestaurantList 
                searchQuery={searchQuery} 
                restaurants={restaurants} 
                onUpdateRestaurant={onUpdateRestaurant} 
              />
            </>
          ) : (
            <Navigate to="/login" />
          )} 
        />

        <Route 
          path="/cart" 
          element={(
            <>
              <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
              <Cart />
            </>
          )} 
        />

        <Route 
          path="/menu/:id" 
          element={(
            <>
              <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
              <Menu /> {/* Ensure Menu component receives the correct restaurant data */}
            </>
          )} 
        />

        <Route 
          path="/edit-menu/:id/:itemId" 
          element={(
            <>
              <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
              <EditMenu restaurants={restaurants} onUpdateRestaurant={onUpdateRestaurant} />
            </>
          )} 
        />

        <Route 
          path="/login" 
          element={(
            <>
              <Header hideElements={true} />
              <Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
            </>
          )} 
        />

        <Route path="/signup" element={<Signup />} />

        <Route 
          path="/edit/:id" 
          element={(
            <RestaurantEdit 
              restaurants={restaurants} 
              onUpdateRestaurant={onUpdateRestaurant} 
            />
          )} 
        />

        <Route 
          path="/add-restaurant" 
          element={(
            <>
              <Header userEmail={userEmail} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
              <AddRestaurant onAddRestaurant={onAddRestaurant} />
            </>
          )} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
