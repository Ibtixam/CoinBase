import React from "react";
import {
  OptionSvg,
  AmazonSvg,
  GoogleSvg,
  ITunesSvg,
  PayoneerSvg,
  PaypalSvg,
  BitcoinSvg,
  TechnoSvg,
  AliExpressSvg,
  KongaSvg,
  JumiaSvg,
  AvarageCircle1Svg,
  AvarageCircle2Svg,
  AvarageCircle3Svg,
} from "../../assets/svgs";
import {
  StatisticsWrapper,
  HeadingWrapper,
  Title,
  StatisticsTitle,
  GraphWrapper,
  NumberWrapper,
  ScoreWrapper,
  ScoreTitle,
  ScoreNumber,
  ProgressBar,
  CircleWrapper,
  CompanyWrapper,
} from "./styles";

export default function Statistics() {
  const values = [60, 50, 40, 30, 20, 10];

  const GRAPH_SVG = [
    { Svg: AmazonSvg },
    { Svg: GoogleSvg },
    { Svg: ITunesSvg },
    { Svg: PayoneerSvg },
    { Svg: BitcoinSvg },
    { Svg: AmazonSvg },
    { Svg: TechnoSvg },
    { Svg: PaypalSvg },
    { Svg: AliExpressSvg },
    { Svg: KongaSvg },
    { Svg: JumiaSvg },
  ];

  const COMPANY_NAMES = [
    { name: "Amazon" },
    { name: "Google" },
    { name: "iTunes" },
    { name: "Payoneer" },
    { name: "Bitcoin" },
    { name: "Ethereum" },
    { name: "Tecno" },
    { name: "Paypal" },
    { name: "Aliexpress" },
    { name: "Konga" },
    { name: "Jumia" },
  ];

  return (
    <StatisticsWrapper>
      <HeadingWrapper>
        <Title>Statistics</Title>
        <OptionSvg />
      </HeadingWrapper>
      <StatisticsTitle>My Own Report</StatisticsTitle>
      <GraphWrapper className="graph-wrapper">
        <NumberWrapper>
          {values.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </NumberWrapper>
        <div>
          <ScoreWrapper>
            <ScoreTitle>Avarage score</ScoreTitle>
            <ScoreNumber>146/217</ScoreNumber>
            <ProgressBar>
              <div className="fill"></div>
            </ProgressBar>
          </ScoreWrapper>
          <CircleWrapper>
            <AvarageCircle1Svg />
            <AvarageCircle2Svg />
            <AvarageCircle3Svg />
          </CircleWrapper>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div style={{ marginLeft: "30px" }}>
            {GRAPH_SVG.map((element, index) => {
              const { Svg } = element;
              return <Svg key={index} className="graph-img" />;
            })}
          </div>
        </div>
      </GraphWrapper>
      <CompanyWrapper>
        {COMPANY_NAMES.map((item, index) => {
          const { name } = item;
          return <p key={index}>{name}</p>;
        })}
      </CompanyWrapper>
    </StatisticsWrapper>
  );
}