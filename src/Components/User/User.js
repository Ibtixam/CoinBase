import React from "react";
import "./User.css";
import Action from "../../Images/options.svg";

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
        <img src={Action} alt="options" className="user-action" />
      </div>
    </div>
  );
}
