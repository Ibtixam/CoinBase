import styled, { css } from "styled-components";

export const Option = styled.div`
  position: absolute;
  width: 59px;
  height: 0px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  color: var(--gray);
  text-align: start;
  font-family: poppins;
  font-size: 14px;
  font-weight: 400;
  z-index: 12;
  transition: height 0.2s, border 0.3s;
  overflow: hidden;
  ${({ selected }) =>
    selected &&
    css`
      height: 52px;
      border: 1px solid var(--white);
    `}
`;

export const OptionButton = styled.div`
  background: white;
  padding: 4px;
  cursor: pointer;
  color: black;
  &:hover {
    background: var(--bgGradient);
    color: white;
  }
`;
