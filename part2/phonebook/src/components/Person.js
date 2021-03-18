import React from 'react'

const Person = ({ name, number, handleDelete }) => {
    return (
        <li key={name}>
            {name} {number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Person