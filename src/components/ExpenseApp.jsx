import { useState } from "react";

const ExpenseApp = () => {
    const[balance,setBalance]=useState(0)
    const[income,setIncome]=useState(0)
    const[expense,setExpense]=useState(0)
    return ( 
        <section>
            <div>
                <h2>Balance <span>{income - expense}</span></h2>
                <button>Add</button>
            </div>
            <div>
                <h2>Expense <span>{expense}</span></h2>
                <h2>Income <span>{income}</span></h2>
            </div>
        </section>
     );
}
 
export default ExpenseApp;