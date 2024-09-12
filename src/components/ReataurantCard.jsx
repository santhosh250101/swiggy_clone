import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, cuisines,avgRating,sla,cloudinaryImageId } = props.resData.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg h-[500px] hover:bg-gray-200">
      <img
        className="rounded-lg h-[200px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{sla.deliveryTime} mins</h3>
    </div>
  );
};
