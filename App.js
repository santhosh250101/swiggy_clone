import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resList = [
  {
    resName: "KFC",
    cusine: ["burger", "snacks"],
  },
  {
    resName: "Dominos",
    cusine: ["pizza", "snacks"],
  },
  {
    resName: "KFC",
    cusine: ["burger", "snacks"],
  },
  {
    resName: "Dominos",
    cusine: ["pizza", "snacks"],
  },
  {
    resName: "KFC",
    cusine: ["burger", "snacks"],
  },
  {
    resName: "Dominos",
    cusine: ["pizza", "snacks"],
  },
  {
    resName: "KFC",
    cusine: ["burger", "snacks"],
  },
  {
    resName: "Dominos",
    cusine: ["pizza", "snacks"],
  },
  {
    resName: "KFC",
    cusine: ["burger", "snacks"],
  },
  {
    resName: "Dominos",
    cusine: ["pizza", "snacks"],
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b15a2367ff3d6f0bf92d1def3c1e5c59"
        alt="no-img"
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cusine.join(",")}</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {console.log(resList)};
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={new Date()} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
