import styled from "styled-components";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 935px;
  height: 65px;
  border-radius: 100px;
  border: 1px solid #f0f0f0;
  background: var(--bgDark);
  margin: auto;
  margin-bottom: 10px;
  padding-left: 7px;
  padding-right: 20px;
  p {
    color: var(--white);
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
  }
  .trDiv {
    margin-left: 12px;
  }

  .type-img {
    margin-left: 45px;
  }

  .name {
    margin-left: 30px;
  }

  .value {
    margin-left: 20px;
  }

  .return {
    margin-left: 28px;
  }
`;

export const TransactionStatus = styled.div`
  width: 94px;
  height: 27px;
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  background: #5df888;
  border-radius: 30px;
  text-align: center;
  margin-top: 1px;
  padding-top: 5px;
`;
