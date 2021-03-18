import React from 'react'

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, handleAddPerson }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type='submit' onClick={handleAddPerson}>add</button>
      </div>
    </form>
  )
}

export default PersonForm