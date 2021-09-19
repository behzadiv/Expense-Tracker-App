import { useState } from "react";
import TransactionForm from "./TransactionForm"
import TranactionComponent from "./TranactionComponent"
import SearchComponent from "./SearchComponent"
const OverWiewComponent = ({income , expense ,onAddTransaction2,transactions,deleteTransaction,searchTransaction}) => {
    const[isShow ,setIsShow]=useState(false)
    console.log(isShow);
    
    return ( 
        <section className="container">
            <div className="topSection">
                <h2>Balance : <span style={income-expense>=0 ? {color:"green"} : {color : "red"}}>{income - expense} $</span></h2>
                <button onClick={()=>setIsShow(!isShow)} className={!isShow?"addButton":"cancelButton"}>{!isShow?"ADD" :"CANCEL"}</button>
            </div>
            {(isShow ? <TransactionForm onAddTransaction={onAddTransaction2} setIsShow={setIsShow}/> : "")}
            <div className="bottomSection">
                <h2>Expense <span style={{color:"red"}}>{expense} $</span></h2>
                <h2>Income <span style={{color:"green"}}>{income} $</span></h2>
            </div>
            {income || expense ?<SearchComponent searchTransaction={searchTransaction}/>:""}
            <TranactionComponent transactions={transactions} deleteTransaction={deleteTransaction}/>
        </section>
     );
}
 
export default OverWiewComponent;