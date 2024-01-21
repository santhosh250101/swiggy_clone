import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
