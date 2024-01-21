import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  else {
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    return (
      <div className="menu">
        <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
        <h3>
          {resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")} -{" "}
          {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}
        </h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((menu) => {
            return (
              <li key={menu.card.info.id}>
                {menu.card.info.name} - {menu.card.info.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RestaurantMenu;
