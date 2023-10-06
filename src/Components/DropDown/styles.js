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
  font-size: 14px;
  font-weight: 400;
  z-index: 12;
  transition: height 0.2s, border 0.3s;
  border: 0px solid #dedede;
  overflow: hidden;
  ${({ selected }) =>
    selected &&
    css`
      height: 53px;
      border: 1px solid #dedede;
    `}
`;

export const OptionButton = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  background: white;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: var(--bgGradient);
    color: white;
  }
`;
