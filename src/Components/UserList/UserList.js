import React from "react";
import "./UserList.css";
import { OptionSvg } from "../../assets/svgs";
import User from "../User/User";
import { UserData } from "./Data";
import { Link } from "react-router-dom";

export default function UserList() {
  return (
    <div className="userlist">
      <div className="head-wrapper">
        <h4 className="r-title">Users</h4>
        <OptionSvg className="r-img" />
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
        <Link to="/userlist">
          <button className="view-more">View More</button>
        </Link>
      </div>
    </div>
  );
}
