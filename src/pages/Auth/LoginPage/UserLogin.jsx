import React from "react";
import "./UserLogin.css";
import Navbar from "../../../components/NavigationBar/NavBar";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  return (
    <div className="login-page-container">
      <div className="navigation-bar">
        <Navbar />
      </div>

      <div className="login-data-container">
        <div className="user-account-options">
          <p>Login</p>
          <p>Register</p>
        </div>

        <div className="user-privacy-data" action="">
          <label>
            Phone Number/Email
            <input
              className="user-ph-mail"
              type="text"
              placeholder="Phone Number/Email"
            />
          </label>
        </div>

        <div className="otp-container">
          <button className="generate-otp-btn">Generate OTP</button>
          <p>
            Don't have an account?{" "}
            <span
              className="login-pg-orange-color-text"
              onClick={navigate("/register")}
            >
              Register Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
