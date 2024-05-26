import React from "react";
import "./Footer.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.png";

function Footer() {
  const options = ["popular", "trending", "latest", "rated"];

  return (
    <div className="footer">
      <div className="footer-head">
        <div className="selection">
          <select name="" id="">
            {options.map((option) => {
              return <option>{option}</option>;
            })}
          </select>
        </div>
        <div className="contents">
          <h4>All</h4>
          <ul className="foot-list">
            <li>Animation</li>
            <li>Branding</li>
            <li>Illustration</li>
            <li>Mobile</li>
            <li>Print</li>
            <li>Product Design</li>
            <li>Topography</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div className="foot-right">
          <div className="filter">
            <FilterListIcon />
            <p>Filters</p>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <div className="images">
          <img src={image1} />
        </div>
        <div className="images">
          <img src={image2} />
        </div>
        <div className="images">
          <img src={image3} />
        </div>
        <div className="images">
          <img src={image4} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
