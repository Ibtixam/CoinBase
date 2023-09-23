import React from "react";
import { LogoSvg, SearchIconSvg, OvalSvg, BellSvg } from "../../assets/svgs";
import Agent from "../../assets/images/Agent.png";
import {
  BellNum,
  Bellnotification,
  ImageName,
  Input,
  LeftDiv,
  Menu,
  Menuline,
  Nav,
  ProfileImage,
  RightDiv,
  SearchDiv,
} from "./styles";

export default function Navbar() {
  const handleSidebar = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("menu-active");
  };

  const MenuLine = [];

  for (let index = 0; index < 3; index++) {
    MenuLine.push(<Menuline key={index} />);
  }

  return (
    <header>
      <Nav>
        <Menu onClick={handleSidebar}>{MenuLine}</Menu>
        <LeftDiv>
          <LogoSvg />
        </LeftDiv>
        <RightDiv>
          <div className="searchbar">
            <SearchDiv>
              <SearchIconSvg />
              <Input type="text" placeholder="Search e.g cards" />
            </SearchDiv>
          </div>
          <ProfileImage>
            <img src={Agent} alt="img" className="img-profile" />
            <ImageName>Agent Rose</ImageName>
          </ProfileImage>
          <Bellnotification>
            <BellSvg className="bell" />
            <OvalSvg className="oval" />
            <BellNum>24</BellNum>
          </Bellnotification>
        </RightDiv>
      </Nav>
    </header>
  );
}
