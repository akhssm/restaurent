import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu'; 
import RestaurantList from './components/RestaurantCard/RestaurantList'; 
import Login from './components/Login/Login'; 
import Signup from './components/Signup/Signup'; 
import { CartProvider } from './CartContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setIsLoggedIn(true);
      setUserEmail(savedEmail);
    }
  }, []);

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
        />
      </Router>
    </CartProvider>
  );
}

const AppRoutes = ({ isLoggedIn, searchQuery, setSearchQuery, setIsLoggedIn, userEmail, setUserEmail }) => {
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
            <RestaurantList searchQuery={searchQuery} />
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
            <Header hideElements={true} /> {/* Hide elements on Login page */}
            <Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
          </>
        )} />

        <Route path="/signup" element={(
          <>
            <Header hideElements={true} /> {/* Hide elements on Signup page */}
            <Signup />
          </>
        )} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
