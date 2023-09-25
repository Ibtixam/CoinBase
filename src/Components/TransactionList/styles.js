import styled from "styled-components";

export const TransactionWrapper = styled.div`
  width: 1023px;
  height: 570px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--bgDark);
  margin-top: 33px;
  .user-wrapper {
    text-align: center;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-right: 46px;
    margin-top: 43px;
    cursor: pointer;
  }
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  color: var(--white);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  margin-top: 45px;
  margin-left: 52px;
  letter-spacing: 0.4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RowTitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 33px;
  padding: 0px 20px;
`;

export const RowTitle = styled.p`
  color: var(--white);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  padding: 0px 25px;
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
  margin: 20px 0px;
  cursor: pointer;
`;
