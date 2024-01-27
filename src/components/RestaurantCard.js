import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.id);
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-200 hover:bg-gray-400" >
      <img
        className="rounded-lg h-[200px] w-[250px]"
        src={
          CDN_URL +
          resData.cloudinaryImageId
        }
        alt="no-img"
      />
      <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
      <h4>{resData.cuisines[0]}</h4>
      <h4>{resData.avgRatingString} stars</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

// Higher order component .

//input RestaurantCard . output RestaurantCardPromoted.

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
        <RestaurantCard {...props}/>
      </div>
      
    )
  };
}

export default RestaurantCard;
