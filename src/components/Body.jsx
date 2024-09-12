import { RestaurantCard } from "./ReataurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  // state variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect called.");
    fetchData();
  }, []);
  // this called fn is called after redner cycle is finished.

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3460551&lng=78.5103532"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you are offline, pls check your internet conncetion</h1>
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="search p-4 m-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredListData = listOfRestaurants.filter((res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .indexOf(searchText.toLowerCase()) !== -1
                );
              });
              setFilteredRestaurants(filteredListData);
            }}
          >
            Search
          </button>
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
