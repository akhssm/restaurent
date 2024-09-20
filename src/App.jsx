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
        <FoodCard name="Pizza" price="$10" />
        <FoodCard name="Veg Roll" price="$15" />
        <FoodCard name="Chicken Biryani" price="$12" />
        <FoodCard name="Muttion Biryani" price="$18" />
      </div>

      <h2>Restaurant Section</h2>
      <div className="restaurant-cards">
        <RestaurantCard name="Swagath Restaurent" rating="4.5" />
        <RestaurantCard name="Shahghouse" rating="4.0" />
        <RestaurantCard name="Bawarchi" rating="4.7" />
        <RestaurantCard name="Paradise" rating="4.2" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
