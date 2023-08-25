import React from "react";
import Wallet from "../Wallet/Wallet";
import { TriangleSvg } from "../../assets/svgs";

export default function WalletCom() {
  return (
    <React.Fragment>
      <div className="o-heading">
        <pre className="o-text">Agent Management   Wallet</pre>
        <pre className="o-text2">
          Accounts   |
          <pre className="o-text3">
            AGENT ROSE
            <TriangleSvg style={{ margin: "0px 7px" }} />
          </pre>
        </pre>
      </div>
      <h4 className="o-title">Wallet</h4>
      <Wallet />
    </React.Fragment>
  );
}
