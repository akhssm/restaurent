import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ searchQuery, restaurants, onUpdateRestaurant }) => {
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>
      <Link to="/add-restaurant">
        <button>Add New Restaurant</button>
      </Link>
      <div className="restaurant-cards-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id} 
              id={restaurant.id} 
              name={restaurant.name} 
              rating={restaurant.rating} 
              description={restaurant.description} 
              showEditButton={true} // Assuming you're using this prop in `RestaurantCard`
            />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
