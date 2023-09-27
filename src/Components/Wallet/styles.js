import styled from "styled-components";

export const WalletWrapper = styled.div`
  width: 1023px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  background: var(--bgDark);
  margin: 33px 0px;
  position: relative;
  overflow: hidden;
  .w-texts {
    margin-left: 25px;
  }

  .w-shape {
    margin-left: -20px;
    margin-top: -12px;
    width: 1040px;
    height: 76.362px;
  }

  .w-plosh {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .trophy-star {
    position: absolute;
    left: 60px;
    top: 100px;
  }

  .white-star {
    position: absolute;
    right: 330px;
    top: 68px;
  }

  .star-2 {
    position: absolute;
    right: 75px;
    bottom: 20px;
  }

  .earning-star {
    position: absolute;
    left: 46%;
    top: 107px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-left: 52px;
`;

export const ButtonWrapper = styled.div`
  width: 134px;
  height: 42px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 400;
  border: 0;
  outline: 0;
  margin: 32px 32px;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background: var(--bgGradient);
    border: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const GradientText = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  background: linear-gradient(144deg, #fc58b3 0%, #feae68 100%);
  border: 0;
  outline: 0;
  padding: 4px 10px;
  border-radius: 30px;
`;

export const TrophyWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TrophyTitle = styled.p`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
`;

export const TrophyDescription = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
