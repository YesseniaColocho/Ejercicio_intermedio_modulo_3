import { useState } from 'react'
import '../scss/App.scss'
import Data from '../assets/data.json'
import ListCountry from './ListContry'
import Filter from './Filters'

function App() {

  const [filteredData, setFilteredData] =  useState(Data)

  function search(query){
    
  }

  return (
    <>
    <h1>Country Info App</h1>
    <Filter onSearch={search} />
    <ListCountry datos={filteredData} />
    </>
  )
}

export default App
