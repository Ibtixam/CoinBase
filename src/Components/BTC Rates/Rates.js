import React from "react";
import "./Rates.css";
import { OptionSvg, ArrowSvg, ArrowCircleSvg } from "../../assets/svgs";

export default function Rates() {
  return (
    <div className="rates">
      <div className="head-wrapper">
        <h4 className="r-title">Conversion Rate to Naira</h4>
        <OptionSvg className="r-img" />
      </div>
      <div className="title-wrapper">
        <div className="c-wrapper">
          <h4 className="c-title">iTunes Card</h4>
        </div>
        <div className="c-wrapper">
          <h4 className="c-title">Amazon Card</h4>
        </div>
        <div className="c-wrapper">
          <h4 className="c-title">Bitcoin</h4>
        </div>
      </div>
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
        <div className="arrow-div">
          <ArrowSvg className="arrow" />
          <ArrowCircleSvg className="arrow-circle" />
        </div>
      </div>
    </div>
  );
}
