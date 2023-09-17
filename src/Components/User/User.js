import React from "react";
import { OptionSvg } from "../../assets/svgs";
import {
  Action,
  UserEmail,
  UserImage,
  UserStatus,
  UserWrapper,
} from "./styles";

export default function User({ data }) {
  const { bg, status, name, email, photo } = data;
  return (
    <UserWrapper>
      <UserStatus style={{ background: bg }}>{status}</UserStatus>
      <UserImage>
        <img src={photo} alt="Img" className="user-img" />
        {name}
      </UserImage>
      <UserEmail>{email}</UserEmail>
      <Action>
        <OptionSvg />
      </Action>
    </UserWrapper>
  );
}
