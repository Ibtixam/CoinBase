import React from "react";
import DropDown from "../DropDown/DropDown";
import { RowWrapper, TransactionStatus } from "./styles";

export default function Transaction({ item, index }) {
  const { type, status, name, bg } = item;
  return (
    <RowWrapper>
      <p className="dateDiv">14/01/2019</p>
      <p className="trDiv">12345678</p>
      <p className="typeDiv">
        <img src={type} alt="Bitcion" className="type-img tr-title" />
      </p>
      <p className="name">{name}</p>
      <p className="value">$100</p>
      <p className="return">#18000</p>
      <TransactionStatus style={{ background: bg }}>{status}</TransactionStatus>
      <DropDown
        optionList={[{ label: "Edit" }, { label: "Delete" }]}
        index={index}
      />
    </RowWrapper>
  );
}
