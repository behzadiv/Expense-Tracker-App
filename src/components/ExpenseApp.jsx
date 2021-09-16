import { useState } from "react";
import OverWiewComponent from "./OverWiewComponent";

const ExpenseApp = () => {
    const[balance,setBalance]=useState(0)
    const[income,setIncome]=useState(0)
    const[expense,setExpense]=useState(0)
    return ( 
        <OverWiewComponent balance={balance} income={income} expense={expense} />
     );
}
 
export default ExpenseApp;