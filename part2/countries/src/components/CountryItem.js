import React, { useState } from 'react'

import Country from './Country'

const CountryItem = ({ country }) => {
  const [show, setShow] = useState(false)

  // Handler
  const handleShowButton = () => setShow(!show)

  if (show) {
    return (
      <div>
        {country.name}
        <button onClick={handleShowButton}>Show</button>
        <Country country={country} />
      </div>
    )
  } else {
    return (
      <div>
        {country.name}
        <button onClick={handleShowButton}>Show</button>
      </div>
    )
  }
}

export default CountryItem