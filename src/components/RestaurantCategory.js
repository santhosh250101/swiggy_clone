import React from "react";
import ItemList from "./ItemList";

function RestaurantCategory(data) {
  console.log(data);
  return (
    <div>

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        <ItemList items = {data.data.itemCards}/>
      </div>
      
    </div>
  );
}

export default RestaurantCategory;
