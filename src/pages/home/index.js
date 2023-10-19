import React from "react";
import Overview from "./Overview/Overview";
import Rates from "./BTC Rates/Rates";
import Wallet from "../../Components/Wallet/Wallet";
import Statistics from "../../Components/Statistics/Statistics";
import UserList from "../../Components/UserList/UserList";
import TransactionList from "../../Components/TransactionList/TransactionList";

const Home = () => {
  return (
    <React.Fragment>
      <Overview />
      <Rates />
      <Wallet />
      <Statistics />
      <UserList />
      <TransactionList />
    </React.Fragment>
  );
};

export default Home;
