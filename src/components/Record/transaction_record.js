import React from "react";
import './reord.css';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { getDefaultNormalizer } from "@testing-library/react";


export default function Transactions_History(){

    const { transactions } = useContext(GlobalContext);
    const history = transactions.map(transaction => transaction);
    const [isHovering, setIsHovering] = useState(false);
    const { deleteTransaction } = useContext(GlobalContext);
    const { editTransaction } = useContext(GlobalContext);

    



    function handleousein(e) {
        setIsHovering(true);
        e.target.parentElement.style.backgroundColor='orange';
        console.log(e.target.parentElement.parentElement);
    }
    function handlemouseout(e) {
        setIsHovering(false);
        e.target.parentElement.style.backgroundColor='transparent';
    }

    function editit(id){

        let amounts = [];
        transactions.forEach((transaction)=>{
            if(transaction.id==id){
               return;
            }
            else{
                amounts.push(transaction.amount);
            }
        });

        const total_balance = amounts.reduce((acc, item) => (acc += item), 0);
        console.log(total_balance);


        let desc=prompt("Description..");
        let amount=+prompt("Amount");
        if(desc==""||amount==""){
            alert("Provide data");
            return;
        }
        function checkvalue(){
            if(isNaN(amount)){amount=+prompt("Enter Numeric Value")}
            if(isNaN(amount)){checkvalue()}
        }
        checkvalue();
        let editedtransaction={id,amount,text:desc};

        if(amount< 1 && (-(amount))>total_balance){
            alert("Low Balance!");
            return;
        }
        else{
            editTransaction(editedtransaction);
        }
       
    }

    function transaction_delete(id){
        let amounts = [];
        let this_transaction;
        transactions.forEach((transaction)=>{
            if(transaction.id==id){
                this_transaction=transaction;
               return;
            }
            else{
                amounts.push(transaction.amount);
            }
        });
        let total_balance =  amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        if(this_transaction.amount > 1 && total_balance < 0){
            alert("YOu cannot delete this transaction, Dont have enough money");
        }
        else{
            deleteTransaction(id);
        }
    }


    return<div className="mainhistory">
            <h2>Transaction History</h2>
            <hr/>
            <table>
            {
                history.map((transaction,index)=>{
                    return  <tr className="tablereow" onMouseOver={handleousein} onMouseOut={handlemouseout}> <td className="icon color"  onClick={() =>  transaction_delete(transaction.id)}><img src="delete.gif"/></td><td>{transaction.text}</td><td>{Math.abs(transaction.amount)}</td><td className="color icon" onClick={()=>{editit(transaction.id)}}><img src="edit.gif"/></td> </tr>
                })
            }
            </table>

       
    </div>
}