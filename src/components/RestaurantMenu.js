import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  else {
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;

    const categories =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => {
          return (
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">
          {resInfo?.cards[0]?.card?.card?.info.name}
        </h1>
        <h3 className="font-bold text-lg">
          {resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")} -{" "}
        </h3>

        {/* Build a accordion*/}

        {categories.map((category, index) => (
          // controlled component as parent is controling it.
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex= {()=>setShowIndex(index)}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantMenu;
