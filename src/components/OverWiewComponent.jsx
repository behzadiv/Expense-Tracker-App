const OverWiewComponent = ({income , expense, balance}) => {
    return ( 
        <section className="container">
            <div className="topSection">
                <h2>Balance : <span>{income - expense}</span></h2>
                <button>Add</button>
            </div>
            <div className="bottomSection">
                <h2>Expense <span>{expense}</span></h2>
                <h2>Income <span>{income}</span></h2>
            </div>
        </section>
     );
}
 
export default OverWiewComponent;