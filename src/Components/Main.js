import React from "react";
import "./Main.css";
import image from './Images/landing.png'
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="content">
        <h1>Discover the world's top designers & creatives</h1>
        <p>
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </p>
        <button className="btn" onClick={()=>navigate("/signup")}>Sign up</button>
      </div>
      <div className="images">
        <img src={image} />
      </div>
    </div>
  );
}

export default Main;
