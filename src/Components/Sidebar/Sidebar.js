import React from "react";
import "./Sidebar.css";
import Eye from "../../Images/eye.svg";
import User from "../../Images/user.svg";
import Message from "../../Images/trade.svg";
import Wallet from "../../Images/wallet.svg";
import Reuse from "../../Images/transaction.svg";
import Statics from "../../Images/static.svg";
import Settings from "../../Images/setting.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  

  const buttons = document.querySelectorAll(".s-overview");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      console.log('clicked');
    });
  });

  return (
    <aside>
      <div className="s-overview active">
        <div className="s-wrapper">
          <img src={Eye} alt="Overview" className="s-eye" />
          <Link to="/" className="s-text">
            Overview
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={User} alt="User" className="s-eye" />
          <Link to="/userlist" className="s-text">
            User
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={Message} alt="Message" className="s-eye" />
          <Link to="/trade" className="s-text">
            Trade
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={Wallet} alt="Wallet" className="s-eye" />
          <Link to="/wallet" className="s-text">
            Wallet
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={Reuse} alt="Reuse" className="s-eye" />
          <Link to="/transactionlist" className="s-text">
            Transactions
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={Statics} alt="Statics" className="s-eye" />
          <Link to="/statistics" className="s-text">
            Statistics
          </Link>
        </div>
      </div>
      <div className="s-overview">
        <div className="s-wrapper">
          <img src={Settings} alt="Settings" className="s-eye" />
          <Link to="/" className="s-text">
            Settings
          </Link>
        </div>
      </div>
      <button className="refer">Referral</button>
      <button className="logout">Logout</button>
    </aside>
  );
}
