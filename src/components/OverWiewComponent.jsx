import { useState } from "react";
import TransactionForm from "./TransactionForm"
import TranactionComponent from "./TranactionComponent"
const OverWiewComponent = ({income , expense ,onAddTransaction2,transactions,deleteTransaction}) => {
    const[isShow ,setIsShow]=useState(false)
    console.log(isShow);
    return ( 
        <section className="container">
            <div className="topSection">
                <h2>Balance : <span>{income - expense}</span></h2>
                <button onClick={()=>setIsShow(!isShow)} className={!isShow?"addButton":"cancelButton"}>{!isShow?"ADD" :"CANCEL"}</button>
            </div>
            {(isShow ? <TransactionForm onAddTransaction={onAddTransaction2}/> : "")}
            <div className="bottomSection">
                <h2>Expense <span>{expense}</span></h2>
                <h2>Income <span>{income}</span></h2>
            </div>
            <TranactionComponent transactions={transactions} deleteTransaction={deleteTransaction}/>
        </section>
     );
}
 
export default OverWiewComponent;