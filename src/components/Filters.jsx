function Filter(props) {

    function handleFilter(ev){
        props.onSearch(ev.target.value)
    }

    return (
      <>
      <input placeholder="Buscador" onChange={handleFilter}></input>
      </>
    )
  }
  
  export default Filter