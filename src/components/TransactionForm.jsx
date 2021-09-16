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
    e.preventDefault();
    onAddTransaction(formValue);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="desc" onChange={changeHandler} />
      <input type="number" name="amount" onChange={changeHandler} />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValue.type==="expense"}
          onClick={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValue.type==="income"}
          onClick={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
