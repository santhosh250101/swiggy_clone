import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">{isOnline? "✅": "🔴"}</li>

          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
