import React from 'react'

const FilterInput = ({ filter, handleInputChange }) => {
  return (
    <div>
      find countries:
      <input value={filter} onChange={handleInputChange} ></input>
    </div>
  )
}

export default FilterInput