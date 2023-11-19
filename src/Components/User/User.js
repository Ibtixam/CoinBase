import React from 'react';
import DropDown from '../DropDown/DropDown';
import {
  Action,
  UserEmail,
  UserImage,
  UserStatus,
  UserWrapper,
} from './styles';

export default function User({ data, index }) {
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
        <DropDown
          optionList={[{ label: 'Edit' }, { label: 'Delete' }]}
          index={index}
        />
      </Action>
    </UserWrapper>
  );
}
