import React from "react";
import "./User.css";
import { OptionSvg } from "../../assets/svgs";

export default function User({ data }) {
  const { bg, status, name, email, photo } = data;
  return (
    <table>
      <tbody>
        <tr className="user-details">
          <td className="user-status" style={{ background: bg }}>
            {status}
          </td>
          <td className="p-img u-img">
            <img src={photo} alt="Img" className="n-img" />
            {name}
          </td>
          <td className="emailDiv">{email}</td>
          <td className="user-action">
            <OptionSvg />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
