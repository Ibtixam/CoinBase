import React from "react";
import "./Statistics.css";
import Options from "../../Images/options.svg";
import Amazon from "../../Images/amazonShape.svg";
import Google from "../../Images/googleShape.svg";
import iTunes from "../../Images/iTunesShape.svg";
import Payoneer from "../../Images/payoneerShape.svg";
import Bitcoin from "../../Images/bitcoinShape.svg";
import Tecno from "../../Images/tecnoShape.svg";
import Paypal from "../../Images/paypalShape.svg";
import AliExpress from "../../Images/aliexpressShape.svg";
import Konga from "../../Images/kongaShape.svg";
import Jumia from "../../Images/jumiaShape.svg";
import Circle1 from "../../Images/avaragecircle1.svg";
import Circle2 from "../../Images/avaragecircle2.svg";
import Circle3 from "../../Images/avaragecircle3.svg";

export default function Statistics() {
  return (
    <div className="Statistics">
      <div className="head-wrapper">
        <h4 className="r-title s-title">Statistics</h4>
        <img src={Options} alt="Options" className="r-img" />
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
            <img src={Circle1} alt="Circle1" className="avarage-circles circles1" />
            <img src={Circle2} alt="Circle2" className="avarage-circles circles2" />
            <img src={Circle3} alt="Circle3" className="avarage-circles circles3" />
          </div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="company-graph">
            <img src={Amazon} alt="Amazon" className="graph-img" />
            <img src={Google} alt="Google" className="graph-img" />
            <img src={iTunes} alt="iTunes" className="graph-img" />
            <img src={Payoneer} alt="Payoneer" className="graph-img" />
            <img src={Bitcoin} alt="Bitcoin" className="graph-img" />
            <img src={Amazon} alt="Amazon" className="graph-img" />
            <img src={Tecno} alt="Tecno" className="graph-img" />
            <img src={Paypal} alt="Paypal" className="graph-img" />
            <img src={AliExpress} alt="AliExpress" className="graph-img" />
            <img src={Konga} alt="Konga" className="graph-img" />
            <img src={Jumia} alt="Jumia" className="graph-img" />
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
