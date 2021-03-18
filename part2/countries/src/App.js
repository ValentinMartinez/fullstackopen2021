import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilterInput from './components/FilterInput'
import CountrySection from './components/CountrySection'

const App = () => {
  // States
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // Fetching countries data
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(resp => setCountries(resp.data))
  }, [])

  // Handlers
  const handleInputChange = (event) => setFilter(event.target.value)

  return (
    <div>
      <FilterInput value={filter} handleInputChange={handleInputChange} />
      <CountrySection countries={countries} filter={filter} />
    </div>
  )
}

export default App