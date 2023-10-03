import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 900px;
  height: 65px;
  border-radius: 100px;
  border: 2px solid #f0f0f0;
  background: var(--bgDark);
  margin-top: 10px;
  margin-left: 59px;
  margin-right: 52px;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  color: var(--white);
  font-size: 12px;
  font-weight: 400;
`;

export const UserStatus = styled.div`
  width: 94px;
  height: 27px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  background: #5df888;
  border-radius: 30px;
  text-align: center;
  margin-top: 21px;
  padding-top: 5px;
`;

export const UserImage = styled.div`
  padding-left: 50px;
  width: 224px;
  display: flex;
  align-items: center;
  .user-img {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const UserEmail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 196px;
`;

export const Action = styled.div`
  margin: 23px 10px;
  cursor: pointer;
`;
