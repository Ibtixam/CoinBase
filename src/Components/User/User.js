import React from "react";
import "./User.css";
import { OptionSvg } from "../../assets/svgs";

export default function User({ data }) {
  const { bg, status, name, email, photo } = data;
  return (
    <div className="user-details">
      <div className="user-status" style={{ background: bg }}>
        {status}
      </div>
      <div className="p-img u-img">
        <img src={photo} alt="Img" className="n-img" />
        <p className="img-name">{name}</p>
      </div>
      <div>
        <p className="user-email">{email}</p>
      </div>
      <div>
        <OptionSvg className="user-action" />
      </div>
    </div>
  );
}
