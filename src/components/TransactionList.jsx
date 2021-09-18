const TransactionList = ({transaction}) => {
    return ( 
    <div className="lists">
        <span><p>{transaction.desc}</p></span>
        <span>{transaction.type==="expense"?  `- ${transaction.amount}` :  `+ ${transaction.amount}`} $</span>
        <span>{transaction.type}</span>
    </div> 
    );
}
 
export default TransactionList;