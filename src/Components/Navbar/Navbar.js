import React from "react";
import { LogoSvg, SearchIconSvg, OvalSvg, BellSvg } from "../../assets/svgs";
import Agent from "../../assets/images/Agent.png";
import "./Navbar.css";

export default function Navbar() {

  const handleSidebar = () => {
    let sidebar = document.querySelector("aside");
    sidebar.classList.toggle("sidebar-active");
  }
  
  return (
    <header>
      <nav>
        <div className="menu" onClick={handleSidebar}>
          <div className="menuline"></div>
          <div className="menuline"></div>
          <div className="menuline"></div>
        </div>
        <div className="left">
          <LogoSvg className="logo" />
        </div>
        <div className="right">
          <div className="searchbar">
            <div className="search">
              <SearchIconSvg className="s-icon" />
              <input type="text" placeholder="Search e.g cards" />
            </div>
          </div>
          <div className="p-img">
            <img src={Agent} alt="Img" className="n-img" />
            <p className="img-name">Agent Rose</p>
          </div>
          <div className="bell-notification">
            <BellSvg className="bell" />
            <OvalSvg className="oval" />
            <p className="b-num">24</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
