const SearchComponent = ({searchTransaction}) => {
    const changeHandler=(e)=>{
        console.log(e.target.value);
        searchTransaction(e.target.value)
    }
    return ( 
        <div className="search">
            <input type="text" onChange={changeHandler} placeholder="Search..."/>
            
        </div>
     );
}
 
export default SearchComponent;