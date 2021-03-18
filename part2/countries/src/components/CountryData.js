import React from 'react'

const CountryData = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
            capital: {country.capital}<br></br>
            population: {country.population}<br></br>
      <h2>languages</h2>
      {country.languages.map((l) => <li key={l.name}>{l.name}</li>)}<br></br>
      <img src={country.flag} alt='flag' width='200'></img>
    </div>
  )
}

export default CountryData