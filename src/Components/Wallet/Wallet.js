import React from "react";
import {
  WalletShapeSvg,
  TrophySvg,
  TraphyStarSvg,
  PloshSvg,
  Star1Svg,
  Star2Svg,
  EarningStarSvg,
} from "../../assets/svgs";
import {
  ButtonWrapper,
  GradientText,
  Title,
  TitleWrapper,
  TrophyDescription,
  TrophyTitle,
  TrophyWrapper,
  WalletWrapper,
} from "./styles";

export default function Wallet() {
  return (
    <WalletWrapper>
      <TitleWrapper>
        <Title>Wallet</Title>
        <ButtonWrapper>
          <span>Withdraw Funds</span>
        </ButtonWrapper>
      </TitleWrapper>
      <TrophyWrapper>
        <PloshSvg className="w-plosh" />
        <TraphyStarSvg className="trophy-star" />
        <EarningStarSvg className="earning-star" />
        <Star1Svg className="white-star" />
        <Star2Svg className="star-2" />
        <TrophySvg className="w-trophy" />
        <div>
          <GradientText>Total Earnings</GradientText>
          <div>
            <TrophyTitle>#120000.00</TrophyTitle>
            <TrophyDescription>
              Please note this’s the total sum of ya’ <br />
              transaction here on <span className="desc-text">GOGE AFRICA</span>
            </TrophyDescription>
          </div>
        </div>
        <div>
          <GradientText>Balance</GradientText>
          <div>
            <TrophyTitle>#30000.00</TrophyTitle>
            <TrophyDescription>
              Please note this the current balance <br />
              amount left on ya’ wallet.
            </TrophyDescription>
          </div>
        </div>
      </TrophyWrapper>
      <WalletShapeSvg className="w-shape" />
    </WalletWrapper>
  );
}
