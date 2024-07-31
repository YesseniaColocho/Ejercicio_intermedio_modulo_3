import Country from "./Country"

function ListCountry(props) {

function countries(){
return props.datos.map((pais)=> <Country pais={pais}/>)
}

    return (
      <>
      <div className="country-list">
        {countries()}
      </div>
      </>
    )
  }
  
  export default ListCountry