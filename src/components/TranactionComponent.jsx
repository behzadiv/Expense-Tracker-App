import TransactionList from "./TransactionList";
const TranactionComponent = ({ transactions, deleteTransaction }) => {
  return (
    <section>
      {transactions.map((transaction) => (
        <TransactionList key={transaction.id} 
        transaction={transaction} 
        deleteTransaction={deleteTransaction}
        />
      ))}
    </section>
  );
};

export default TranactionComponent;
