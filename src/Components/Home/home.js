import React from 'react';
import Overview from '../Overview/Overview';
import Rates from '../BTC Rates/Rates';
import Wallet from '../Wallet/Wallet';
import Statistics from '../Statistics/Statistics';
import UserList from '../UserList/UserList';
import TransactionList from '../TransactionList/TransactionList';

export default function home() {
  return (
    <React.Fragment>
        <Overview />
        <Rates />
        <Wallet />
        <Statistics />
        <UserList />
        <TransactionList />
    </React.Fragment>
  )
}
