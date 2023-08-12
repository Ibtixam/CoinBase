import React from "react";
import logo from "../../Images/logo.svg";
import SearchIcon from "../../Images/Search-Icon.svg";
import Agent from "../../Images/Agent.png";
import Bell from "../../Images/bell.svg";
import Oval from "../../Images/oval.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="left">
          <img src={logo} alt="cionbase logo" className="logo" />
        </div>
        <div className="right">
          <div className="searchbar">
            <img src={SearchIcon} alt="Search Icon" className="s-icon" />
            <div className="search">
              <input type="text" placeholder="Search e.g cards" />
            </div>
          </div>
          <div className="p-img">
            <img src={Agent} alt="Img" className="n-img" />
            <p className="img-name">Agent Rose</p>
          </div>
          <div className="bell-notification">
            <img src={Bell} alt="Bell Icon" className="bell" />
            <img src={Oval} alt="Oval shape" className="oval" />
            <p className="b-num">24</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
