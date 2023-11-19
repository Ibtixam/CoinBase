import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  max-width: 100%;
  height: 33px;
  display: flex;
  justify-content: space-between;
`;

export const HeadingText = styled.pre`
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 700;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  .calender:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h4`
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 700;
`;

export const BoxWrapper = styled.div`
  display: flex;
  margin: -35px;
  margin-bottom: 34px;
`;

export const Box = styled.div`
  display: flex;
  width: 318px;
  height: 170px;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
  background: var(--primary-color);
  margin-top: 60px;
  margin-left: 35px;
  padding: 10px 0px;
  gap: 50px;
`;

export const CircleWrapper = styled.div`
  position: relative;
  top: 13px;
  left: 13px;
  .circle {
    position: relative;
    top: 13px;
    left: 13px;
  }
  .loader {
    position: absolute;
    top: 13px;
    left: 17px;
    z-index: 1;
  }
  .vector {
    position: absolute;
    top: 35px;
    left: 33px;
    transform: rotate(360deg);
  }
  .vector2 {
    position: absolute;
    top: 14px;
    left: 60px;
  }
`;

export const Numbers = styled.p`
  font-size: 12px;
  font-weight: 700;
  background: var(--3, linear-gradient(144deg, #fc58b3 0%, #feae68 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  top: 50px;
  left: 40px;
`;

export const BoxStatus = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 127px;
`;

export const GraphWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  .s-graph {
    position: absolute;
    top: 50px;
    left: 58px;
  }
`;

export const GraphNumber = styled.p`
  color: #1cd1a1;
  font-size: 12px;
  font-weight: 400;
`;
