import React, { useContext } from "react";
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
import { Spinner } from "./Components/Spinner";
import MoodContext from "./Context/Mode/ModeContext";

export default function App() {
  const { loading } = useContext(MoodContext);
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <main>
          <Navbar />
          <Sidebar />
          {!loading ? (
            <div className="container">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/userlist" Component={UserList} />
                <Route path="/trade" Component={Trade} />
                <Route path="/rates" Component={Rates} />
                <Route path="/wallet" Component={Wallet} />
                <Route path="/statistics" Component={Statistics} />
                <Route path="/transactionList" Component={TransactionList} />
                <Route path="/setting" Component={Home} />
              </Routes>
            </div>
          ) : (
            <Spinner />
          )}
        </main>
      </Router>
    </React.Fragment>
  );
}
