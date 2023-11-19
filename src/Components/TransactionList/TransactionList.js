import React from 'react';
import { OptionSvg } from '../../assets/svgs';
import Transaction from '../Transaction/Transaction';
import { Data } from './Data';
import { Link } from 'react-router-dom';
import {
  Button,
  HeadingWrapper,
  RowTitle,
  RowTitleWrapper,
  Title,
  TransactionWrapper,
} from './styles';

export default function TransactionList() {
  return (
    <TransactionWrapper>
      <HeadingWrapper>
        <Title>Transactions</Title>
        <OptionSvg />
      </HeadingWrapper>
      <RowTitleWrapper>
        <RowTitle>Date</RowTitle>
        <RowTitle>Transaction ID</RowTitle>
        <RowTitle>Type</RowTitle>
        <RowTitle>Name</RowTitle>
        <RowTitle>Value</RowTitle>
        <RowTitle>Return</RowTitle>
        <RowTitle>Status</RowTitle>
        <RowTitle>Action</RowTitle>
      </RowTitleWrapper>
      {Data.map((item, index) => (
        <Transaction key={index} item={item} />
      ))}
      <div className="user-wrapper">
        <Link to="/transactionlist">
          <Button>View More</Button>
        </Link>
      </div>
    </TransactionWrapper>
  );
}
