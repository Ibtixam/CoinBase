import React from "react";
import { OptionSvg } from "../../assets/svgs";
import User from "../User/User";
import { UserData } from "./Data";
import { Link } from "react-router-dom";
import {
  Button,
  HeadingTitle,
  UserHeadings,
  UserTitle,
  UserWrapper,
} from "./styles";

export default function UserList() {
  return (
    <UserWrapper>
      <div className="head-wrapper">
        <UserTitle>Users</UserTitle>
        <OptionSvg className="r-img" />
      </div>
      <UserHeadings>
        <HeadingTitle>Account Status</HeadingTitle>
        <HeadingTitle>User Name</HeadingTitle>
        <HeadingTitle>Email</HeadingTitle>
        <HeadingTitle>Action</HeadingTitle>
      </UserHeadings>
      {UserData.map((item, index) => (
        <User key={item.id} data={item} index={index} />
      ))}
      <div className="user-wrapper">
        <Link to="/userlist">
          <Button>View More</Button>
        </Link>
      </div>
    </UserWrapper>
  );
}
