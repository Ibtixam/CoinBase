import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/home";
import Wallet from "./Components/WalletComoponent/WalletCom";
import Rates from "./Components//BTC Rates/Rates";
import UserList from "./Components/UserList/UserList";
import TransactionList from "./Components/TransactionList/TransactionList";
import Statistics from "./Components/Statistics/Statistics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trade from "./Components/Trade/Trade";
import GlobalStyles from "./Styles/global-styles";
import ModeState from "./Context/Mode/ModeState";

export default function App() {
  return (
    <React.Fragment>
      <ModeState>
        <GlobalStyles />
        <Router>
          <Navbar />
          <main>
            <Sidebar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/rates" element={<Rates />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/transactionList" element={<TransactionList />} />
                <Route path="/setting" element={<Home />} />
              </Routes>
            </div>
          </main>
        </Router>
      </ModeState>
    </React.Fragment>
  );
}
