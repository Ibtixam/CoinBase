import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1023px;
  height: 325px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GradientTitle = styled.h4`
  width: 115px;
  height: 23px;
  font-size: 12px;
  font-weight: 700;
  background: var(--bgGradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 40px 142px 0 54px;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  margin: 61px 42px 0 0;

  .arrow {
    position: absolute;
    margin-left: 14px;
    margin-top: 15px;
    z-index: 1;
    cursor: pointer;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  gap: 45px;
  width: 280px;
  margin: 10px 0 0 53px;
`;

export const CurrencyName = styled.p`
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 400;
  margin: 10px 0 16px 0;
`;
