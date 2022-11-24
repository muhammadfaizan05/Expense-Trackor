import React from "react";
import './income.css';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";


export default function Inco_Expense() {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);



    return <>

        <div id="container">
            <div id="inome">
                <h3>Income</h3>
                <span id="incomeamount">{income}</span>
            </div>
            <hr />
            <div id="expense">
                <h3>Expense</h3>
                <span id="expenseamount">{Math.abs(expense)}</span>
            </div>
        </div>
    </>
}