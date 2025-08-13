import React from "react";
import "./hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import p8 from "../../assets/p8.webp";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" srcset="" height="60px" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" srcset="" height="30px" />
        </div>
      </div>

      <div className="hero-right">
        <img src={p8} alt="" srcset="" height="500px" />
      </div>
    </div>
  );
};
