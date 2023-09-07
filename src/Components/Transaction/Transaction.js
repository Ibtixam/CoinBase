import React from "react";
import "./Transaction.css";
import { OptionSvg } from "../../assets/svgs";

export default function Transaction(props) {
  const { type, status, name, bg } = props;
  return (
    <div className="Transaction">
      <div className="dateDiv">14/01/2019</div>
      <div className="trDiv">12345678</div>
      <div className="typeDiv">
        <img src={type} alt="Bitcion" className="type-img tr-title" />
      </div>
      <div className="name">{name}</div>
      <div className="value">$100</div>
      <div className="return">#18000</div>
      <div className="tr-status tr-title" style={{ background: bg }}>
        {status}
      </div>
      <OptionSvg className="tr-action tr-title" />
    </div>
  );
}
