import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  EyeSvg,
  UserSvg,
  TradeSvg,
  WalletSvg,
  TransactionSvg,
  StaticticSvg,
  SettingsSvg,
} from "../../assets/svgs";

export default function Sidebar() {
  const [active, setActice] = useState(window.location.href);

  const activePage = () => {
    setActice(window.location.href);
    console.log(active);
  };

  return (
    <aside>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <EyeSvg className="s-eye" />
          <Link to="/" className="s-text">
            Overview
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/userlist" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <UserSvg className="s-eye" />
          <Link to="/userlist" className="s-text">
            User
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/trade" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <TradeSvg className="s-eye" />
          <Link to="/trade" className="s-text">
            Trade
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/wallet" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <WalletSvg className="s-eye" />
          <Link to="/wallet" className="s-text">
            Wallet
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/transactionlist" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <TransactionSvg className="s-eye" />
          <Link to="/transactionlist" className="s-text">
            Transactions
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/statistics" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <StaticticSvg className="s-eye" />
          <Link to="/statistics" className="s-text">
            Statistics
          </Link>
        </div>
      </div>
      <div
        className={`s-overview ${
          active === "http://localhost:3000/setting" && "active"
        }`}
        onClick={activePage}
      >
        <div className="s-wrapper">
          <SettingsSvg className="s-eye" />
          <Link to="/setting" className="s-text">
            Settings
          </Link>
        </div>
      </div>
      <button className="refer">Referral</button>
      <button className="logout">Logout</button>
    </aside>
  );
}
