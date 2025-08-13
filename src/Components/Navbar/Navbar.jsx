import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { cardCount } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" srcset="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            Home
          </Link>{" "}
          {menu === "home" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            {" "}
            Men{" "}
          </Link>
          {menu === "mens" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/womens"
          >
            {" "}
            Womens{" "}
          </Link>{" "}
          {menu === "womens" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            {" "}
            Kid's{" "}
          </Link>{" "}
          {menu === "kids" ? <hr></hr> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="/card">
          {" "}
          <img src={cart_icon} alt="" srcset="" height="40px" />
        </Link>
        <div className="nav-card-count">{cardCount}</div>
      </div>
    </div>
  );
};
