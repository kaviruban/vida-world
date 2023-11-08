import { useRef } from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo/Logomark-Orange-22x22.png";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="vida-header">
      <div className="header-container">
        <div className="main-logo">
          <img className = "vida-logo"src={Logo} alt="main-logo" height="auto" width="auto" />
        </div>
        <div className="header-nav-items">
          <div className="header-nav-itm-container">
            <button className="test-ride-btn" >Test Ride</button>
            <button className="reserve-btn">Reserve</button>
            <button>--</button>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
