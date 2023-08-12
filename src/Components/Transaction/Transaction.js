import React from "react";
import "./Transaction.css";
import Action from '../../Images/options.svg';

export default function Transaction(props) {
  return (
    <div className="Transaction">
      <div className="dateDiv">
        <p className="date tr-title">14/01/2019</p>
      </div>
      <div className="trDiv">
        <p className="tr-id tr-title">12345678</p>
      </div>
      <div className="typeDiv">
        <img src={props.type} alt="Bitcion" className="type-img tr-title" />
      </div>
      <div className="name">
        <p className="tr-title">{props.name}</p>
      </div>
      <div className="value">
        <p className="tr-title">$100</p>
      </div>
      <div className="return">
        <p className="tr-title">#18000</p>
      </div>
      <div className="tr-status tr-title" style={{background: props.bg}} >{props.status}</div>
      <img src={Action} alt="options" className="tr-action tr-title" />
    </div>
  );
}
