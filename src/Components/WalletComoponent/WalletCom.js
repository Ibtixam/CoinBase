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
    color: var(--secondary-color);
    font-size: 12px;
    font-weight: 700;
  `;

  const Title = styled.h4`
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 700;
  `;

  return (
    <React.Fragment>
      <div>
        <HeadingWrapper>
          <HeadingText>Agent Management   Wallet</HeadingText>
          <HeadingText>
            Accounts  |  AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </HeadingText>
        </HeadingWrapper>
      </div>
      <Title>Wallet</Title>
      <Wallet />
    </React.Fragment>
  );
}
