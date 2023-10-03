import React, { useContext } from "react";
import Agent from "../../assets/images/Agent.png";
import Modeontext from "../../Context/Mode/ModeContext";
import {
  LogoSvg,
  SearchIconSvg,
  OvalSvg,
  BellSvg,
  SunSvg,
  LightLogoSvg,
  MoonSvg,
  // MoonSvg,
} from "../../assets/svgs";
import {
  BellNum,
  Bellnotification,
  ImageName,
  Input,
  LeftDiv,
  Menu,
  Menuline,
  ModeWrapper,
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

  const { toggleMode, mode } = useContext(Modeontext);

  return (
    <header>
      <Nav>
        <Menu onClick={handleSidebar}>{MenuLine}</Menu>
        <LeftDiv>{mode === "light" ? <LogoSvg /> : <LightLogoSvg />}</LeftDiv>
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
          <ModeWrapper onClick={toggleMode}>
            {mode === "light" ? <SunSvg /> : <MoonSvg />}
          </ModeWrapper>
        </RightDiv>
      </Nav>
    </header>
  );
}
