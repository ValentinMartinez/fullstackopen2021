import React, { useState, useEffect } from 'react'
import personServices from './services/persons'

import Title from './components/Title'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Notification from './components/Notification'

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  // Fetch persons
  useEffect(() => {
    personServices.getAll().then(personArray => setPersons(personArray))
  }, [])

  // Handlers
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const handleAddPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find((actualName) => newName === actualName.name)

    if (existingPerson) {
      const confirm = window.confirm(`${newName} is already added to phonebook`
        + ', replace the old number with a new one?')
      if (confirm) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personServices.update(existingPerson.id, updatedPerson)
          .then(resp => {
            setPersons(persons.map(p => p.id !== resp.id ? p : resp))
            setNotification({
              message: `${resp.name}'s number was updated successfuly.`,
              type: 'success'
            })
            setTimeout(() => { setNotification(null) }, 5000)
          })
          .catch(error => {
            setNotification({
              message: `${existingPerson.name} has already been removed from server.`,
              type: 'error'
            })
            setTimeout(() => { setNotification(null) }, 5000)
            setPersons(persons.filter(n => n.name !== updatedPerson.name))
          })
      }
    } else {
      const personObject = { name: newName, number: newNumber }
      personServices.create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification({
            message: `Added ${returnedPerson.name} successfuly`,
            type: 'success'
          })
          setTimeout(() => { setNotification(null) }, 5000)
        })
        .catch(error => {
          setNotification({
            message: `The person was not added.`,
            type: 'error'
          })
          setTimeout(() => { setNotification(null) }, 5000)
        })
    }

    setNewName('')
    setNewNumber('')
  }

  const handleDelete = id => {
    const confirm = window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)

    if (confirm) return personServices
      .deletePerson(id)
      .then(() => {
        setNotification({
          message: `Deleted ${persons.find(p => p.id === id).name} successfuly.`,
          type: 'success'
        })
        setTimeout(() => { setNotification(null) }, 5000)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        setNotification({
          message: `${persons.find(p => p.id === id).name} has already been removed from server.`,
          type: 'error'
        })
        setTimeout(() => { setNotification(null) }, 5000)
        setPersons(persons.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <Title text='Phonebook' />
      <Notification notification={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Title text='add a new' />
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleAddPerson={handleAddPerson}
      />
      <Title text='Numbers' />
      <PersonList persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App