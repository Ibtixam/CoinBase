import React from "react";
import "./Wallet.css";
import { WalletShapeSvg, TrophySvg } from "../../assets/svgs";

export default function Wallet() {
  return (
    <div className="wallet">
      <div className="w-title-wrapper">
        <h4 className="w-text">Wallet</h4>
        <button className="w-btn">
          <span className="btn-gradient">Withdraw Funds</span>
        </button>
      </div>
      <div className="wallet-trophy">
        <TrophySvg className="w-trophy" />
        <div className="w-text-wrapper">
          <button className="w-earning">Total Earnings</button>
          <div className="w-texts">
            <p className="w-title">#120000.00</p>
            <p className="w-desc">
              Please note this’s the total sum of ya’ <br />
              transaction here on <span className="desc-text">GOGE AFRICA</span>
            </p>
          </div>
        </div>
        <div className="w-text-wrapper">
          <button className="w-balance">Balance</button>
          <div className="w-texts">
            <p className="w-title">#30000.00</p>
            <p className="w-desc">
              Please note this the current balance <br />
              amount left on ya’ wallet.
            </p>
          </div>
        </div>
      </div>
      <WalletShapeSvg className="w-shape" />
    </div>
  );
}
