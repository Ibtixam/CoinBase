import React from "react";
import "./TransactionList.css";
import Options from "../../Images/options.svg";
import Transaction from "../Transaction/Transaction";
import { Data } from "./Data";

export default function TransactionList() {
  return (
    <div className="tr-list">
      <div className="head-wrapper">
        <h4 className="r-title">Transactions</h4>
        <img src={Options} alt="Option svg" className="r-img" />
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
        <button className="tr-view-more">View More</button>
      </div>  
    </div>
  );
}
