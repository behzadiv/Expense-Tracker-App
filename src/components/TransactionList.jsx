const TransactionList = ({transaction,deleteTransaction}) => {
    const onDelete=(id)=>{
        //console.log(id);
        deleteTransaction(id)
    }
    return ( 
    <div className="lists">
        <span><p>{transaction.desc}</p></span>
        <span>{transaction.type==="expense"?  `- ${transaction.amount}` :  `+ ${transaction.amount}`} $</span>
        <button onClick={()=>onDelete(transaction.id)}>Delete</button>
    </div> 
    );
}
 
export default TransactionList;