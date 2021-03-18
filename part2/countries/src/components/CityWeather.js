import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CityWeather = ({ cityName }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${cityName.replace(' ', '%20')}`)
      .then(resp => setWeather(resp.data))
  }, [cityName])

  if (!weather) return <></>
  else return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <b>temperature: </b> {weather.current.temperature} Celsius<br></br>
      <img src={weather.current.weather_icons[0]} alt='weather icon' width='30px' height='30px'></img><br></br>
      <b>wind: </b> {weather.current.wind_speed + 'mph direction ' + weather.current.wind_dir}
    </div>
  )
}

export default CityWeather