import React from "react";
import { useState } from "react";
import './header.css';
import { useSelector } from "react-redux";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function Header(props) {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  

  return <>
       <h2>Expense Trackor By Muhammad Faizan </h2>
    <h2 className="currntinfo"> Current Balance</h2>
    <h2 id="balance">${total}</h2>


  </>
}