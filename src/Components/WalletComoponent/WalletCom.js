import React from "react";
import Wallet from "../Wallet/Wallet";
import Triangle from "../../Images/Triangle.png";

export default function WalletCom() {
  return (
    <React.Fragment>
      <div className="o-heading">
        <pre className="o-text">Agent Management   Wallet</pre>
        <pre className="o-text2">
          Accounts   |
          <pre className="o-text3">
            AGENT ROSE
            <img src={Triangle} alt="Trinangle" style={{ margin: "0px 3px" }} />
          </pre>
        </pre>
      </div>
      <h4 className="o-title">Wallet</h4>
      <Wallet />
    </React.Fragment>
  );
}
