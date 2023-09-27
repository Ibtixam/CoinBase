import React from "react";
import "./Statistics.css";
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

export default function Statistics() {
  return (
    <div className="Statistics">
      <div className="head-wrapper">
        <h4 className="r-title s-title">Statistics</h4>
        <OptionSvg className="r-img" />
      </div>
      <p className="statistic-text">My Own Report</p>
      <div className="graph-wrapper">
        <div className="numbers">
          <p className="number-pargraphs">60</p>
          <p className="number-pargraphs">50</p>
          <p className="number-pargraphs">40</p>
          <p className="number-pargraphs">30</p>
          <p className="number-pargraphs">20</p>
          <p className="number-pargraphs">10</p>
        </div>
        <div className="graph">
          <div className="score">
            <p className="score-text">Avarage score</p>
            <p className="score-num">146/217</p>
            <div className="progress-bar">
              <div className="fill"></div>
            </div>
          </div>
          <div className="circles">
            <AvarageCircle1Svg className="avarage-circles circles1" />
            <AvarageCircle2Svg className="avarage-circles circles2" />
            <AvarageCircle3Svg className="avarage-circles circles3" />
          </div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="company-graph">
            <AmazonSvg className="graph-img" />
            <GoogleSvg className="graph-img" />
            <ITunesSvg className="graph-img" />
            <PayoneerSvg className="graph-img" />
            <BitcoinSvg className="graph-img" />
            <AmazonSvg className="graph-img" />
            <TechnoSvg className="graph-img" />
            <PaypalSvg className="graph-img" />
            <AliExpressSvg className="graph-img" />
            <KongaSvg className="graph-img" />
            <JumiaSvg className="graph-img" />
          </div>
        </div>
      </div>
      <div className="company-names">
        <p className="names">Amazon</p>
        <p className="names">Google</p>
        <p className="names">iTunes</p>
        <p className="names">Payoneer</p>
        <p className="names">Bitcoin</p>
        <p className="names">Ethereum</p>
        <p className="names">Tecno</p>
        <p className="names">Paypal</p>
        <p className="names">Aliexpress</p>
        <p className="names">Konga</p>
        <p className="names">Jumia</p>
      </div>
    </div>
  );
}
