import React from "react";
import './transaction.css';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";


export default function Transaction() {

    const { addTransaction } = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total_balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    let data = useForm();

    function dotransaction(mydata) {
        let tranaction = {
            id: Math.round(Math.random() * 1000),
            amount: +mydata.amount,
            text: mydata.desc
        }
        // console.log(tranaction.amount);
        // console.log(total_balance);
        if(tranaction.amount < 1 && (-(tranaction.amount))>total_balance){
            alert("Low Balance!");
            return;
        }
        else{
            addTransaction(tranaction);
        }

        data.reset();
    }

    return <div id="transactionsdiv">
        <h2>Add New Transaction</h2>
        <hr />
        <div className="form">
            <form onSubmit={data.handleSubmit(dotransaction)}>
                <label>Description &nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="Detail of tranaction"  {...data.register('desc', { required: true })} />
                {data.formState.errors.desc && <p>Detail is required.</p>}
                <label >Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="number" placeholder='"+" for_income "-" for_expense'  {...data.register('amount', { required: true })} />
                {data.formState.errors.amount && <p>Enter Amount</p>}
                <input type="Submit" id="submitbutton" />
            </form>
        </div>
    </div>

}