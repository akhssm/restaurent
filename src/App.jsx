import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import Header from './components/Header/Header';  // Adjust the paths if needed
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'; // Import Cart component
import Menu from './components/Menu/Menu'; // Import Menu component
import RestaurantList from './components/RestaurantCard/RestaurantList'; // Import the RestaurantList component
import Login from './components/Login/Login'; // Import the Login component

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* Define Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <section>
                  <h2>Restaurant Section</h2>
                  {/* Render the RestaurantList component which contains all restaurant cards */}
                  <RestaurantList />
                </section>
              </>
            }
          />

          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />

          {/* Menu Route */}
          <Route path="/menu/:id" element={<Menu />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
