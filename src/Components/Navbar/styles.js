import styled, { css } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
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
  color: var(--secondary-color);
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
  ${({ mode }) =>
    mode &&
    css`
      border: double 2px transparent;
      background-image: linear-gradient(white, white), var(--bgGradient);
      background-origin: border-box;
      background-clip: content-box, border-box;
      background-color: transparent;
    `}
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
  color: var(--secondary-color);
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
  color: white;
  text-align: center;
  font-size: 6px;
  font-weight: 700;
  position: absolute;
  top: 3px;
  left: 11px;
  z-index: 2;
`;

export const ModeWrapper = styled.div`
  padding: 7px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    background: rgb(139 139 139 / 40%);
  }
  svg {
    width: 30px;
    color: var(--secondary-color);
    cursor: pointer;
  }
`;
