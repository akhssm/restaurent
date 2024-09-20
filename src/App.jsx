import React from 'react';
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import RestaurantCard from './components/RestaurantCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <h2>Food Section</h2>
      <div className="food-cards">
        <FoodCard name="Food 1" price="$10" />
        <FoodCard name="Food 2" price="$15" />
        <FoodCard name="Food 3" price="$12" />
        <FoodCard name="Food 4" price="$18" />
      </div>

      <h2>Restaurant Section</h2>
      <div className="restaurant-cards">
        <RestaurantCard name="Restaurant 1" rating="4.5" />
        <RestaurantCard name="Restaurant 2" rating="4.0" />
        <RestaurantCard name="Restaurant 3" rating="4.7" />
        <RestaurantCard name="Restaurant 4" rating="4.2" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
