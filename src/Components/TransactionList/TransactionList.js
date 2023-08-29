import React from "react";
import { OptionSvg } from "../../assets/svgs";
import "./TransactionList.css";
import Transaction from "../Transaction/Transaction";
import { Data } from "./Data";
import { Link } from "react-router-dom";

export default function TransactionList() {
  return (
    <div className="tr-list">
      <div className="head-wrapper">
        <h4 className="r-title">Transactions</h4>
        <OptionSvg className="r-img" />
      </div>
      <div className="tr-titles">
        <p className="t-title">Date</p>
        <p className="t-title">Transaction ID</p>
        <p className="t-title">Type</p>
        <p className="t-title">Name</p>
        <p className="t-title">Value</p>
        <p className="t-title">Return</p>
        <p className="t-title">Status</p>
        <p className="t-title">Action</p>
      </div>
      {Data.map((item) => (
        <Transaction
          key={item.id}
          status={item.status}
          bg={item.bg}
          name={item.name}
          type={item.type}
        />
      ))}
      <div className="user-btndiv">
        <Link to="/transactionlist">
          <button className="tr-view-more">View More</button>
        </Link>
      </div>
    </div>
  );
}
