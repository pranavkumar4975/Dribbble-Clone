import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function LoginSignup() {
    navigate("/loginsignup");
  }
  return (
    <nav className="navbar">
      <div className="items">
        <h2>dribbble</h2>
        <ul className="nav-list">
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn design</li>
          <li>Go Pro</li>
          <li>Marketplace</li>
          <li>Hire Designers</li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="right-menu">
          <SearchIcon style={{ fontSize: 22 }} />
          <h3 onClick={LoginSignup}>Sign in / Sign up</h3>
          <button>Start a free project</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
