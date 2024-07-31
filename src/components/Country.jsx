function Country(props) {

  const pais= props.pais

    return (
      <>
      <div>
        {pais.flag}
        {pais.name.official}
        {pais.name.common}
        {pais.continents}
      </div>
      </>
    )
  }
  
  export default Country