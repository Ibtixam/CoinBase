import React from "react";
import "./Transaction.css";
import { OptionSvg } from "../../assets/svgs";

export default function Transaction(props) {
  return (
    <table style={{ margin: "auto" }}>
      <tbody>
        <tr className="Transaction">
          <td className="dateDiv">14/01/2019</td>
          <td className="trDiv">12345678</td>
          <td className="typeDiv">
            <img src={props.type} alt="Bitcion" className="type-img tr-title" />
          </td>
          <td className="name">{props.name}</td>
          <td className="value">$100</td>
          <td className="return">#18000</td>
          <td className="tr-status tr-title" style={{ background: props.bg }}>
            {props.status}
          </td>
          <td className="tr-action">
            <OptionSvg />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
