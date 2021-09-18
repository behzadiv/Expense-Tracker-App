import TransactionList from "./TransactionList"
const TranactionComponent = ({trasactions}) => {
    return ( 
        <section>
            
            {trasactions.map(transaction=><TransactionList key={transaction.id} transaction={transaction}/>)}
        </section>
     );
}
 
export default TranactionComponent;