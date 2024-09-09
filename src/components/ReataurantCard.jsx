import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, cuisines,avgRating,sla,cloudinaryImageId } = props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{sla.deliveryTime} mins</h3>
    </div>
  );
};
