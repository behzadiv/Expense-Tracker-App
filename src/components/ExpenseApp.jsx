import { useEffect, useState } from "react";
import OverWiewComponent from "./OverWiewComponent";
import TranactionComponent from "./TranactionComponent";
import TransactionList from "./TransactionList";
const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransaction,setFilteredTransaction]=useState([])
  useEffect(()=>{
      setFilteredTransaction([...transactions])
  },[transactions])
  console.log("first",transactions);
  const addTransactionHandler = (formValue) => {
      const data = { ...formValue, id: Date.now() };
      setTransactions([...filteredTransaction, data]);
      if (formValue.type === "income")
      setIncome(JSON.parse(formValue.amount) + JSON.parse(income));
      else setExpense(JSON.parse(formValue.amount) + JSON.parse(expense));
    };
    const deleteTransaction=(id)=>{
        
        const newTransaction =filteredTransaction.filter((t)=> t.id !==id)
        setFilteredTransaction(newTransaction)
          const index = transactions.findIndex((t)=>t.id===id)
        const deleteAmount = transactions[index].amount
        if (transactions[index].type === "income")
          setIncome(JSON.parse(income) - JSON.parse(deleteAmount));
        else setExpense( JSON.parse(expense) - JSON.parse(deleteAmount));
    }
    
  return (
    <div>
      <OverWiewComponent
        income={income}
        expense={expense}
        onAddTransaction2={addTransactionHandler}
        transactions={filteredTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default ExpenseApp;
