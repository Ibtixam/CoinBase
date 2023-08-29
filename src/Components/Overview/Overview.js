import React from "react";
import {
  CircleSvg,
  LoaderSvg,
  VectorSvg,
  Vector2Svg,
  GraphSvg,
  CalenderSvg,
  TriangleSvg,
  TriGreenSvg,
} from "../../assets/svgs";
import "./Overview.css";
import DropDown from "../DropDown/DropDown";

export default function Overview(props) {
  const data = [
    {
      numbers: 15000,
      totalnumText: "User",
      percent: "22.8%",
    },
    {
      numbers: 43498,
      totalnumText: "Trade",
      percent: "11.8%",
    },
    {
      numbers: 24642,
      totalnumText: "Transactions",
      percent: "11.8%",
    },
  ];

  return (
    <React.Fragment>
      <div className="o-heading">
        <pre className="o-text">Agent Management System Overview</pre>
        <pre className="o-text2">
          Accounts |
          <pre className="o-text3">
            AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </pre>
        </pre>
      </div>
      <div className="overview">
        <div className="o-text-wrapper">
          <h4 className="o-title">Overview</h4>
          <CalenderSvg className="calender" />
        </div>
        <div className="o-wrapper">
          {data.map((item, index) => (
            <div className="o-trade" key={index}>
              <div className="circle">
                <CircleSvg className="circle" />
                <LoaderSvg className="loader" />
                <VectorSvg className="vector" />
                <Vector2Svg className="vector2" />
                <p className="c-text">{item.numbers}</p>
              </div>
              <div className="status">
                <p className="s-title">
                  Total Number <br /> Of {item.totalnumText}
                </p>
                <div className="graphDiv">
                  <p className="s-num">
                    {item.percent} <TriGreenSvg />
                  </p>
                  <GraphSvg className="s-graph" />
                  <DropDown index={index} Class={"c-options"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
