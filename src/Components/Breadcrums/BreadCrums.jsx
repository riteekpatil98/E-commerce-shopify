import React from "react";
import "./breadCrums.css";
import arrow_icon from "../../assets/arrow_icon.png";
export const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadCrumd ">
      Home <img src={arrow_icon} alt="" srcset="" height="30px" /> SHOP{" "}
      <img src={arrow_icon} alt="" srcset="" height="30px" />
      {product.category}
      <img src={arrow_icon} alt="" srcset="" height="30px" /> {product.name}
    </div>
  );
};
