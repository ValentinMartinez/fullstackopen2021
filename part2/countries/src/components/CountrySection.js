import React from 'react'

import Country from './Country'
import CountryList from './CountryList'

const CountrySection = ({ countries, filter }) => {
  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))

  if (filter === '' || filteredCountries.length === 0) return (<></>)
  else if (filteredCountries.length === 1) return <Country country={filteredCountries[0]} />
  else if (filteredCountries.length <= 10) return <CountryList countries={filteredCountries} />
  else return <div>Too many matches, specify another filter</div>
}

export default CountrySection