import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

const Body = () => {
  const [lisOfRestaurants, setLisOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurants = lisOfRestaurants.filter((res) => res.rating > 3);
            setLisOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {lisOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
