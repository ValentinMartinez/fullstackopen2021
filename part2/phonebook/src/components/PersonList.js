import React from 'react'
import Person from './Person'

const PersonList = ({ persons, filter, handleDelete }) => {
    return (
        <ul>
            {persons
                .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
                .map((p) => <Person key={p.id} name={p.name} number={p.number}
                                handleDelete={() => handleDelete(p.id)} />)}
        </ul>
    )
}

export default PersonList