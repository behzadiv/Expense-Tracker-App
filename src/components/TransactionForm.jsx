import { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    desc: "",
    amount: 0,
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  //console.log(type);
  const submitHandler = (e) => {
    // const cost =formValue.amount.split("")
    // console.log(cost);
    
    e.preventDefault();
    //if(!formValue.desc || cost[0]==="0") return alert("please enter subject and 0 is not acceptable")
    if(!formValue.desc) return alert("please enter subject")
    onAddTransaction(formValue);
    setFormValue({ type: "expense",
    desc: "",
    amount: 0})
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="desc" onChange={changeHandler} value={formValue.desc} placeholder="subject..." />
      <input type="number" name="amount" onChange={changeHandler} value={formValue.amount} />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValue.type==="expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValue.type==="income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
