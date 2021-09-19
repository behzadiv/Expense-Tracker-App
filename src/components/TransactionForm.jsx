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
    onAddTransaction(formValue);
    setFormValue({ type: "expense",
    desc: "",
    amount: 0})
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <input type="text" name="desc" onChange={changeHandler} value={formValue.desc} placeholder="subject..." className="input" required/>
      <input type="number" name="amount" onChange={changeHandler} value={formValue.amount} className="input" required/>
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
