import "./FooterComp.css";
import React from "react";
import AmazonLogo from "../../assets/Images/amaz_logo.png";
import FlipkartLogo from "../../assets/Images/flip_logo.png";

function FooterComp() {
  return (
    <div className="footer-container">
      
      <div className="product-selling-customers">
      <p>Available On</p>
        <img src={AmazonLogo} alt="amazon-logo" />
        <img src={FlipkartLogo} alt="flipkart-logo" />
      </div>
      <div className="footer-details">
        <p>CONNECT</p>
        <p>Let's connect here</p>
        <p>
          Copyright &copy; 2022 VIDA.All rights reserved to{" "}
          <span className="footer-orange-color-text">Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}

export default FooterComp;
