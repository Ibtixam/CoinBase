import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
  width: 300px;
  height: 90%;
  border-top: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  z-index: 100;
  margin-top: 83px;
  display: inline;
  link {
    color: var(--secondary-color);
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1200px) {
    display: inline;
    transform: translateX(-300px);
  }
  &.menu-active {
    transform: translateX(0px);
    position: absolute;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  ${({ active }) =>
    active &&
    css`
      background: var(--bgGradient);
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      width: 250px;
    `}
`;

export const ItemWrapper = styled.div`
  display: flex;
  padding: 18px;
  align-items: center;
  padding-left: 55px;
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 400;
  ${({ mode }) =>
    mode &&
    css`
      color: white;
    `}
  svg {
    cursor: pointer;
    margin-right: 25px;
  }
`;

export const Button = styled.div`
  border: 0;
  outline: 0;
  display: block;
  padding: 12px;
  background: transparent;
  color: var(--secondary-color);
  font-size: 14px;
  font-weight: 400;
  margin-top: 75px;
  margin-left: 139px;
  cursor: pointer;
  &:last-child {
    margin-top: 10px;
  }
`;
