import React from "react";
import "./Overview.css";
import Trigreen from "../../Images/t-green.svg";
import Triangle from "../../Images/Triangle.png";
import Circle from "../../Images/circle.svg";
import Loader from "../../Images/loader.svg";
import Vector from "../../Images/vector.svg";
import Vector2 from "../../Images/vector2.svg";
import Graph from "../../Images/graph.svg";
import Options from "../../Images/options.svg";
import Calender from "../../Images/calender.svg";

export default function Overview(props) {
  return (
    <React.Fragment>
      <div className="o-heading">
        <pre className="o-text">Agent Management   System Overview</pre>
        <pre className="o-text2">
          Accounts   |  
          <pre className="o-text3">
            AGENT ROSE
            <img src={Triangle} alt="Trinangle" style={{ margin: "0px 3px" }} />
          </pre>
        </pre>
      </div>
      <div className="overview">
        <div className="o-text-wrapper">
          <h4 className="o-title">Overview</h4>
          <img src={Calender} alt="Calender" className="calender" />
        </div>
        <div className="o-wrapper">
          <div className="o-trade">
            <div className="circle">
              <img src={Circle} alt="circle" className="circle" />
              <img src={Loader} alt="loader" className="loader" />
              <img src={Vector} alt="vector" className="vector" />
              <img src={Vector2} alt="vector2" className="vector2" />
              <p className="c-text">15000</p>
            </div>
            <div className="status">
              <p className="s-title">
                Total Number <br /> Of Users
              </p>
              <p className="s-num">
                22.8% <img src={Trigreen} alt="t-green" />
              </p>
              <img src={Graph} alt="Graph Base" className="s-graph" />
              <img src={Options} alt="options" className="c-options" />
            </div>
          </div>
          <div className="o-trade">
            <div className="circle">
              <img src={Circle} alt="circle" className="circle" />
              <img src={Loader} alt="loader" className="loader" />
              <img src={Vector} alt="vector" className="vector" />
              <img src={Vector2} alt="vector2" className="vector2" />
              <p className="c-text">43498</p>
            </div>
            <div className="status">
              <p className="s-title">
                Total Number <br /> Of Trade
              </p>
              <p className="s-num">
                11.8% <img src={Trigreen} alt="t-green" />
              </p>
              <img src={Graph} alt="Graph Base" className="s-graph" />
              <img src={Options} alt="options" className="c-options" />
            </div>
          </div>
          <div className="o-trade">
            <div className="circle">
              <img src={Circle} alt="circle" className="circle" />
              <img src={Loader} alt="loader" className="loader" />
              <img src={Vector} alt="vector" className="vector" />
              <img src={Vector2} alt="vector2" className="vector2" />
              <p className="c-text">24642</p>
            </div>
            <div className="status">
              <p className="s-title">
                Total Number <br /> Of Transactions
              </p>
              <p className="s-num">
                11.8%
                <img src={Trigreen} alt="t-green" />
              </p>
              <img src={Graph} alt="Graph Base" className="s-graph" />
              <img src={Options} alt="options" className="c-options" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
