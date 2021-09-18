import { useState } from "react";
import OverWiewComponent from "./OverWiewComponent";
import TranactionComponent from "./TranactionComponent"
const ExpenseApp = () => {
    
    const[income,setIncome]=useState(0)
    const[expense,setExpense]=useState(0)
    const[trasactions,setTransactions]=useState([])
    const addTransactionHandler=(formValue)=>{
       const data = {...formValue , id: Date.now()}
       setTransactions([...trasactions,data])
       if(formValue.type ==="income")setIncome(JSON.parse(formValue.amount)+JSON.parse(income))
       else setExpense(JSON.parse(formValue.amount)+JSON.parse(expense))
    }
    return ( 
        <div>
            <OverWiewComponent income={income} expense={expense} onAddTransaction2={addTransactionHandler}/>
            <TranactionComponent trasactions={trasactions}/>
        </div>
       );
}
 
export default ExpenseApp;