import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 1023px;
  height: 644px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
  .head-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .user-wrapper {
    text-align: center;
  }
`;

export const UserHeadings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 33px;
`;

export const HeadingTitle = styled.div`
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 700;
  padding-right: 19px;
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
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 700;
  margin-top: 45px;
  margin-left: 52px;
  letter-spacing: 0.4px;
`;

export const Button = styled.button`
  width: 140px;
  height: 45px;
  background: var(--bgGradient);
  border: 0;
  outline: 0;
  border-radius: 100px;
  color: #fff;
  font-size: 12px;
  margin-top: 29px;
  cursor: pointer;
  margin-bottom: 29px;
`;
