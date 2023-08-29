import React, { useEffect } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
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

  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <aside>
      <div className={`s-overview ${location.pathname === "/" && "active"}`}>
        <Link to="/" className="s-text">
          <div className="s-wrapper">
            <EyeSvg className="s-eye" />
            Overview
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${
          location.pathname === "/userlist" && "active"
        }`}
      >
        <Link to="/userlist" className="s-text">
          <div className="s-wrapper">
            <UserSvg className="s-eye" />
            User
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${location.pathname === "/trade" && "active"}`}
      >
        <Link to="/trade" className="s-text">
          <div className="s-wrapper">
            <TradeSvg className="s-eye" />
            Trade
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${location.pathname === "/wallet" && "active"}`}
      >
        <Link to="/wallet" className="s-text">
          <div className="s-wrapper">
            <WalletSvg className="s-eye" />
            Wallet
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${
          location.pathname === "/transactionlist" && "active"
        }`}
      >
        <Link to="/transactionlist" className="s-text">
          <div className="s-wrapper">
            <TransactionSvg className="s-eye" />
            Transactions
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${
          location.pathname === "/statistics" && "active"
        }`}
      >
        <Link to="/statistics" className="s-text">
          <div className="s-wrapper">
            <StaticticSvg className="s-eye" />
            Statistics
          </div>
        </Link>
      </div>
      <div
        className={`s-overview ${location.pathname === "/setting" && "active"}`}
      >
        <Link to="/setting" className="s-text">
          <div className="s-wrapper">
            <SettingsSvg className="s-eye" />
            Settings
          </div>
        </Link>
      </div>
      <button className="refer">Referral</button>
      <button className="logout">Logout</button>
    </aside>
  );
}
