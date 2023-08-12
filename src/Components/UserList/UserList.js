import React from "react";
import "./UserList.css";
import Options from "../../Images/options.svg";
import User from "../User/User";
import { UserData } from "./Data";

export default function UserList() {
  return (
    <div className="userlist">
      <div className="head-wrapper">
        <h4 className="r-title">Users</h4>
        <img src={Options} alt="Option svg" className="r-img" />
      </div>
      <div className="user-titles">
        <p className="u-title">Account Status</p>
        <p className="u-title">User Name</p>
        <p className="u-title">Email</p>
        <p className="u-title">Action</p>
      </div>
      {UserData.map((item) => (
        <User key={item.id} data={item} />
      ))}
      <div className="user-btndiv">
        <button className="view-more">View More</button>
      </div>
    </div>
  );
}
