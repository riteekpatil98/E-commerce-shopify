import React from "react";
import "./footer.css";
import logo from "../../assets/logo.webp";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" srcset="" height="40px" />
        <p>Shopify</p>
      </div>
      <ul className="footer-link">
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" srcset="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook} alt="" srcset="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" srcset="" height="30px" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr></hr>
        <p>Copyright @ 2023 -All Right Reserve</p>
      </div>
    </div>
  );
};
