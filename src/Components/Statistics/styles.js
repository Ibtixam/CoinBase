import styled, { css } from 'styled-components';

export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 580px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
  margin-bottom: 33px;
  position: relative;
  .lines {
    width: 861.169px;
    height: 0.966px;
    border: 0.5px dashed #462764;
    margin-top: 32px;
    margin-bottom: 53px;
  }
  .graph-img {
    margin-top: -300px;
    margin-right: 63px;
  }

  ${({ mode }) =>
    mode &&
    css`
      .lines {
        border: 0.5px dashed #dedede;
      }
    `}
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

export const StatisticsTitle = styled.p`
  display: block;
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 700;
  margin-top: 30px;
  margin-left: 50px;
`;

export const GraphWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const NumberWrapper = styled.div`
  width: 40px;
  height: 356px;
  margin-top: 23px;
  margin-left: 68px;
  border-right: #dee6e9 3px solid;
  p {
    color: var(--secondary-color);
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 37px;
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 153px;
  height: 86px;
  border-radius: 4px;
  background: #f3dbf9;
  left: 39%;
  top: 24%;
`;

export const ScoreTitle = styled.p`
  color: #858585;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ScoreNumber = styled.p`
  color: #b327f5;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 11px;
`;

export const ProgressBar = styled.div`
  width: 130px;
  height: 5px;
  background: #fff;
  border-radius: 2.5px;
  .fill {
    width: 90px;
    height: 5px;
    border-radius: 2.5px;
    background: var(--bgGradient);
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 135px;
  right: 94px;
  svg {
    position: absolute;
  }
`;

export const CompanyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 89%;
  margin-left: 85px;
  p {
    color: var(--secondary-color);
    font-size: 12px;
    font-weight: 400;
  }
`;
