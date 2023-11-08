import React from "react";
import Navbar from "../../components/NavigationBar/NavBar";
import "../HomePage/HomePgVida.css";
import FestiveBannerImg from "../../assets/Images/festive_web_banner_home.jpg";
import FestiveBannerImgSepcifications from "../../assets/Images/festive-banner-specifications.jpeg";
import ServiceImg from "../../assets/Images/Services.png";
import ChangeMakerImg from "../../assets/Images/Changemaker_Web_banner.jpg";
import BatteryVerticalImg from "../../assets/Images/Batteries-Vertical.png";
import VidaModelImg from "../../assets/Images/V1PRASBRCELMAO.png";
import VProEveryOne from "../../assets/Images/v1Pro-everyone.png";
import DelhiPriceDetailsImg from "../../assets/Images/pricing-delhi-new.png";
import PurchaseMobileImg from "../../assets/Images/Purchase_Mobile.png";
import FooterComp from "../../components/Footer/FooterComp";

function HomePgVida() {
  return (
    <div className="vida-home-container">
      <div className="navigation-bar-container">
        <Navbar />
      </div>
      <div className="festive-web-banner">
        <div className ="slider-container">
          <div className ="menu">
            <label for="slide-dot-1"></label>
            <label for="slide-dot-2"></label>
          </div>
          <input id="slide-dot-1" type="radio" name="slides" checked />
          <div className ="slide slide-1"></div>
          <input id="slide-dot-2" type="radio" name="slides" />
          <div className ="slide slide-2"></div>
        </div>
        <img  src={FestiveBannerImgSepcifications} alt="" />
      </div>
      <div className="service-provider-container">
        <img  src={ServiceImg} alt="services-img" />
      </div>
      <div className="battery-vehicle-container">
        <div className="battery-vehicle-img-container">
          <img  src={BatteryVerticalImg} alt="" />
        </div>

        <div className="about-battery">
          <p>
            Now you <span className="orange-color-text">take charge</span> of
            charging We designed your VIDA electric scooter so you don't worry
            about the range, just take the battery out and charge at any 5A
            Plug-point close to you
          </p>
        </div>
      </div>

      <div className="vida-pro-model-container">
        <div className="vida-pro-model-text">
          <p>
            One for <span className="orange-color-text">Everyone</span>
          </p>
          <p>Buy according to your convenience</p>
        </div>
        <div className="vida-pro-location-drop-down">
          <input
            className="vida-model-location"
            type="text"
            placeholder="Bengaluru,Karnataka"
          />
        </div>
      </div>
      <div className="vida-one-pro-container">
        <div className="vida-one-pro-img">
          <img src={VProEveryOne} alt="vida-model-img" />
        </div>
        <p>V1PRO</p>
        <div className="about-vida-pro-model">
          <p>Real world Range(RWR)</p>
          <p>Top Speed</p>
          <p>Fast charging time 0-80%</p>
          <p>Acceleration(0-40 kmph)</p>
        </div>
        <div className="extra-specfications-vida-pro">
          <p className="vida-pro-orange-color-text">Product Specifications</p>
          <p className="vida-pro-orange-color-text">Configure {"->"}</p>
        </div>
      </div>

      <div className="area-pricing-about-container">
        <div className="header-in-area-pricing">
          <p>Pricing in</p>
          <input type="text" placeholder="New" />
          <p>V1 PRO</p>
        </div>
        <div className="area-effective-pricing">
          <h4>Effective Price</h4>
          <p>
            *Price is inclusive of portable charger,FAME|| subsidy and state
            government subsidy(Wherever applicable).
          </p>
          <br />
          <p>
            Exclusice of Insurance,Road tax & Registration charges.All prices
            are inclusive of G.S.T *Optional accessory | Call VIDA customer care
            18002668432 for more information
          </p>
        </div>
      </div>

      <div className="pricing-in-diff-places">
        <div className="in-delhi">
          <p>Price in Delhi</p>
        </div>
        <div className="in-bengaluru">
          <p>Price in Bengaluru</p>
        </div>
        <div className="in-jaipur">
          <p>Price in Jaipur</p>
        </div>
      </div>

      <div className="view-price-details-areawise">
        <img src={DelhiPriceDetailsImg} alt="delhi-price-details-img" />
      </div>

      <div className="vida-contact-container">
        <div className="vida-contact-img-container">
          <h6>Keep in Touch</h6>
          <p> get updates on sales specials and more</p>
          <img  src={VidaModelImg} alt="vida-model-img" />
        </div>
        <div className=".vida-contact-details-container">
          <label htmlFor="">
            First Name
            <input
              className="vida-contact-user-data"
              type="text"
              placeholder="Enter First Name"
            />
          </label>
          <label htmlFor="">
            Last Name
            <input
              className="vida-contact-user-data"
              type="text"
              placeholder="Enter Last Name"
            />
          </label>
          <label className="user-mob-num" htmlFor="">
            Mobile Number
            <input
              className="vida-contact-user-mob-extension"
              type="text"
              placeholder="+91 v"
            ></input>
            <input
              className="vida-contact-user-data"
              type="text"
              placeholder="Enter Mobile Number"
            />
          </label>
          <label htmlFor="">
            E-mail
            <input
              className="vida-contact-user-data"
              type="text"
              placeholder="Enter E-mail"
            />
          </label>
          <p>
            Mention active account this will be used to send important mails
          </p>
          <label htmlFor="">
            PIN Code
            <input placeholder=" Enter PIN Code" type="text" />
          </label>
        </div>
        <button className="viva-user-details-subtmitBtn">Submit</button>
      </div>

      <div className="vida-payment-info">
        <div className="payment-info-header">
          <p>Bring home a Vida</p>
          <input type="text" placeholder="New Delhi , Delhi" />
        </div>

        <div className="full-payment">
          <p>Make full payment</p>
          <p>Starting price</p>
          <p className="orange-color-text">Know more</p>
        </div>
        <div className="loan-payment">
          <p>Purchase on loan</p>
          <p>Starting EMI</p>
          <p className="orange-color-text">Know more</p>
        </div>
        <div className="emi-payment">
          <p>Starting EMI</p>
          <p className="orange-color-text">Know more</p>
        </div>
        <div className="subscription-payment">
          <p>Subscription Plans</p>
          <p className="orange-color-text">Compare Plans{"->"}</p>
        </div>
      </div>

      <div className="vida-hero-last-banner">
        <img className = "purchase-image"src={PurchaseMobileImg} alt="" />
        <div className="purchase-content">
          <h4>CHOOSE HOW YOU OWN YOUR VIDA V1 ELECTRIC SCOOTER</h4>
          <p>EMI Starting @2,499*</p>
          <p>Loan offers at never-before interest rate of 5.99%*</p>
          <p>Zero*Processing Fee</p>
          <button className="emi-calc-btn">EMI Calculator</button>
        </div>
        
      </div>
      <p className="faq-container">Frequently asked questions</p>
      <div className="footer-community-container">
        <div className="vida-all-community-container">
          <div className="community-vida">
            <h6>VIDA</h6>
            <p>Our Story</p>
            <p>Contact Us</p>
          </div>
          <div className="community-vidaone">
            <h6>VIDA V1</h6>
            <p>VIDA V1 PRO</p>
            <p>VIDA V1 PLUS</p>
          </div>
          <div className="ask-community">
            <h6>Community</h6>
            <p>FAQs</p>
          </div>
        </div>
        <div className="footer-container">
          <FooterComp />
        </div>
      </div>
    </div>
  );
}

export default HomePgVida;
