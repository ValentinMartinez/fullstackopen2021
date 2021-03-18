import React from 'react'

import CountryData from './CountryData'
import CityWeather from './CityWeather'

const Country = ({ country }) => {
  return (
    <div>
      <CountryData country={country} />
      <CityWeather cityName={country.capital} />
    </div>
  )
}

export default Country