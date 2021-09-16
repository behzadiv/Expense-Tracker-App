import TransactionList from "./TransactionList"
const TranactionComponent = ({trasactions}) => {
    return ( 
        <section>
            
            {trasactions.map(transaction=><TransactionList transaction={transaction}/>)}
        </section>
     );
}
 
export default TranactionComponent;