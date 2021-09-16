import { useState } from "react";
import OverWiewComponent from "./OverWiewComponent";

const ExpenseApp = () => {
    
    const[income,setIncome]=useState(0)
    const[expense,setExpense]=useState(0)
    const[trasactions,setTransactions]=useState([])
    const addTransactionHandler=()=>{
        console.log("ok");
    }
    return ( 
        <OverWiewComponent income={income} expense={expense} onAddTransaction2={addTransactionHandler}/>
     );
}
 
export default ExpenseApp;