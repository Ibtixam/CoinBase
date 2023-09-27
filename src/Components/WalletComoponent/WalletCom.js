import React from "react";
import Wallet from "../Wallet/Wallet";
import { TriangleSvg } from "../../assets/svgs";
import styled from "styled-components";

export default function WalletCom() {
  const HeadingWrapper = styled.div`
    max-width: 100%;
    height: 33px;
    display: flex;
    justify-content: space-between;
  `;

  const HeadingText = styled.pre`
    color: var(--white);
    font-size: 12px;
    font-weight: 700;
  `;

  const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    .calender:hover {
      cursor: pointer;
    }
  `;

  const Title = styled.h4`
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
  `;

  return (
    <React.Fragment>
      <HeadingWrapper>
        <HeadingText>Agent Management   System Overview</HeadingText>
        <HeadingText>
          Accounts  |  AGENT ROSE
          <TriangleSvg style={{ margin: "0px 7px" }} />
        </HeadingText>
      </HeadingWrapper>
      <TitleWrapper>
        <Title>Wallet</Title>
      </TitleWrapper>
      <Wallet />
    </React.Fragment>
  );
}
