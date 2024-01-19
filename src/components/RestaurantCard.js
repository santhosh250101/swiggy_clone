const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData.id);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b15a2367ff3d6f0bf92d1def3c1e5c59"
        alt="no-img"
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cusine.join(",")}</h4>
      <h4>{resData.rating} stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestaurantCard;
