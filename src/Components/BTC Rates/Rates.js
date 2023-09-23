import React from "react";
import "./Rates.css";
import { OptionSvg, ArrowSvg, ArrowCircleSvg } from "../../assets/svgs";
import {
  ArrowWrapper,
  GradientTitle,
  HeadingWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

export default function Rates() {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>Conversion Rate to Naira</Title>
        <OptionSvg className="r-img" />
      </HeadingWrapper>
      <TitleWrapper>
        <div>
          <GradientTitle>iTunes Card</GradientTitle>
        </div>
        <div>
          <GradientTitle>Amazon Card</GradientTitle>
        </div>
        <div>
          <GradientTitle>Bitcoin</GradientTitle>
        </div>
      </TitleWrapper>
      <div className="wrapper">
        <div className="cards-wrapper">
          <div className="r-left">
            <p className="l-text">USA Physical</p>
            <p className="l-text">USA E-Code card</p>
            <p className="l-text">UK Physical Card</p>
            <p className="l-text">UK E-Code Card</p>
          </div>
          <div className="r-right">
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
          </div>
        </div>
        <div className="cards-wrapper">
          <div className="r-left">
            <p className="l-text">USA Physical</p>
            <p className="l-text">USA E-Code card</p>
            <p className="l-text">UK Physical Card</p>
            <p className="l-text">UK E-Code Card</p>
          </div>
          <div className="r-right">
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
          </div>
        </div>
        <div className="cards-wrapper">
          <div className="r-left">
            <p className="l-text">Bitcoin BTC</p>
            <p className="l-text">Bitcoin BTC</p>
            <p className="l-text">Bitcoin BTC</p>
            <p className="l-text">Bitcoin BTC</p>
          </div>
          <div className="r-right">
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
            <p className="r-text">N400.00</p>
          </div>
        </div>
        <ArrowWrapper>
          <ArrowSvg className="arrow" />
          <ArrowCircleSvg style={{ position: "relative" }} />
        </ArrowWrapper>
      </div>
    </Wrapper>
  );
}
