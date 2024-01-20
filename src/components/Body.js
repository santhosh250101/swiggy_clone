import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [lisOfRestaurants, setLisOfRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924235&lng=78.4677401"
    );
    const json = await data.json();
    setLisOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestro(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return lisOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredRes =
                searchText.length == 0
                  ? lisOfRestaurants
                  : lisOfRestaurants.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText)
                    );
              setFilteredRestro(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurants = lisOfRestaurants.filter(
              (res) => res.info.avgRating === 4.4
            );
            setFilteredRestro(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestro.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.infoWithStyle?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
