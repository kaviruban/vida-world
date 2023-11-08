import React from "react";
import "./UserSignUp.css";
import Navbar from "../../../components/NavigationBar/NavBar";
import { useNavigate } from "react-router-dom";


function UserSignUp() {
  const navigate = useNavigate();
  return (
   
    <div className="signup-page-container">
      <div className="navigaiton-bar">
        <Navbar />
      </div>

      <form action="">
      <div className="signup-container">
        <div className="user-account-options">
          <p>Login</p>
          <p>Register</p>
        </div>
        <div className="collect-user-data-container">
          
        <label htmlFor="">
          First Name
          <input className = "receive-user-data" type="text" placeholder="Enter First Name" />
        </label>
        <label htmlFor="">
          Last Name
          <input className = "receive-user-data" type="text" placeholder="Enter Last Name" />
        </label>
        <label className= "user-mob-num" htmlFor="">
          Mobile Number
          <input className="country-extension-mob" type="text" placeholder="+91 v"></input>
          <input  className = "receive-user-data" type="text" placeholder="Enter Mobile Number" />
        </label>
        <label htmlFor="">
          E-mail
          <input className = "receive-user-data" type="text" placeholder="Enter E-mail" />
        </label>
        <label htmlFor="">
          State
          <input className = "receive-user-data" type="text" placeholder="Select State         v" />
        </label>
        <label htmlFor="">
          City
          <input className = "receive-user-data" type="text" placeholder="Select/Search Your City" />
        </label>

        <div className="confirm-check">
          <input type="checkbox" />
          <p>Receive notifications on WhatsApp Get connected on WhatsApp</p>
        </div>
        <div className="confirm-check">
          <input type="checkbox" />
          <p>
            I agree to{" "}
            <span className="signup-pg-orange-color-text">Terms and Conditions</span>
          </p>
        </div>

        <hr />
        <button className="generate-otp-btn">Generate OTP</button>
        <p>
          Already have an account?{" "}
          <span className="signup-pg-orange-color-text">
            Login Now
          </span>
        </p>
      </div>
      </div>
      </form>
    </div>
   
  );
}

export default UserSignUp;
