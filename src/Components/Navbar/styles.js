import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #f7f7f7;
  background: var(--bgDark);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .logo {
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    position: fixed;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 4px;
  flex: 1 1;
  @media screen and (min-width: 1200px) {
    margin-left: 40px;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1.4;
  margin-right: 12px;
`;

export const Menu = styled.div`
  margin-left: 27px;
  padding-top: 8px;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Menuline = styled.div`
  background: white;
  width: 24px;
  height: 3px;
  border-radius: 5px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 80%;
  border: 0;
  outline: 0;
  background: transparent;
  margin-left: 70px;
  color: var(--white);
  font-size: 12px;
  font-weight: 400;
  opacity: 0.8;
  padding-left: 10px;
  margin-top: 12px;
  @media screen and (max-width: 1200px) {
    margin-top: 11px;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
  height: 44px;
  width: 440px;
  border-radius: 100px;
  border: 1px solid white;
  svg {
    position: absolute;
    top: 14px;
    left: 20px;
  }
  @media screen and (max-width: 1200px) {
    height: 40px;
    width: 350px;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  .img-profile {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    object-fit: cover;
  }
`;

export const ImageName = styled.p`
  color: var(--white);
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-right: 40px;
  margin-left: 12px;
`;

export const Bellnotification = styled.div`
  z-index: 2;
  position: relative;
  right: 22px;
  top: 1px;
  .oval {
    z-index: 2;
    position: absolute;
    left: 7px;
    top: -1px;
  }
`;

export const BellNum = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 6px;
  font-weight: 700;
  margin: -24px 11px;
  position: absolute;
  z-index: 2;
`;
