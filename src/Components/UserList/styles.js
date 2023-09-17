import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 1023px;
  height: 644px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--bgDark);
  .head-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .user-btndiv {
    text-align: center;
  }
`;

export const UserTitle = styled.h4`
  margin-bottom: 10px;
  color: var(--white);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  margin-top: 45px;
  margin-left: 52px;
  letter-spacing: 0.4px;
`;

export const UserHeadings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 33px;
`;

export const HeadingTitle = styled.div`
  color: var(--white);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  padding-right: 19px;
`;

export const Button = styled.button`
  width: 140px;
  height: 45px;
  background: linear-gradient(185deg, #fd749b 0%, #281ac8 130%);
  border: 0;
  outline: 0;
  border-radius: 100px;
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  margin-top: 29px;
  cursor: pointer;
  margin-bottom: 29px;
`;