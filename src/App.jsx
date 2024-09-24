import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import Header from './components/Header/Header';  // Adjust the paths if needed
import Footer from './components/Footer/Footer';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import FoodCard from './components/FoodCard/FoodCard';
import Cart from './components/Cart/Cart'; // Import Cart component
import Menu from './components/Menu/Menu'; // Import Menu component

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
                  <h2>Food Section</h2>
                  <div className="food-cards">
                    <FoodCard key="1" name="Pizza" price="$10" />
                    <FoodCard key="2" name="Veg Roll" price="$15" />
                    <FoodCard key="3" name="Chicken Biryani" price="$12" />
                    <FoodCard key="4" name="Mutton Biryani" price="$18" />
                  </div>
                </section>

                <section>
                  <h2>Restaurant Section</h2>
                  <div className="restaurant-cards">
                    <RestaurantCard 
                      key={1} 
                      id={1} 
                      name="Swagath Restaurant" 
                      rating="4.5" 
                      description="Famous for South Indian dishes" 
                    />
                    <RestaurantCard 
                      key={2} 
                      id={2} 
                      name="Shahghouse" 
                      rating="4.0" 
                      description="Known for its Biryani" 
                    />
                    <RestaurantCard 
                      key={3} 
                      id={3} 
                      name="Bawarchi" 
                      rating="4.7" 
                      description="Popular for Kebabs and Biryani" 
                    />
                    <RestaurantCard 
                      key={4} 
                      id={4} 
                      name="Paradise" 
                      rating="4.2" 
                      description="Best in town for Hyderabadi Biryani" 
                    />
                  </div>
                </section>
              </>
            }
          />

          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />

          {/* Menu Route */}
          <Route path="/menu/:id" element={<Menu />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
