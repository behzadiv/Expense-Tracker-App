import { useState } from "react";

const TransactionForm = ({onAddTransaction}) => {
    const[desc,setDesc]=useState("")
    const[amount,setAmount]=useState(0)
    const[type,setType]=useState("")

    const descHandler=(e)=>{
        console.log(e.target.value);
        setDesc(e.target.value)
    }
    const amountHandler=(e)=>{
        console.log(e.target.value);
        setAmount(e.target.value)
    }
    //console.log(type);
  return (
    <form >
      <input type="text" name="desc" onChange={(e)=>descHandler(e)}/>
      <input type="number" name="amount" onChange={(e)=>amountHandler(e)}/>
      <div>
        <input type="radio" value="Expense" name="type" onClick={()=>setType("expense")}/>
        <label>Expense</label>
        <input type="radio" value="Income" name="type" onClick={()=>setType("income")} />
        <label>Income</label>
      </div>
      <button type="submit" onClick={onAddTransaction}>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
