import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(resp => resp.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(resp => resp.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(resp => resp.data)
}

const deletePerson = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req
}

const personServices = { getAll, create, update, deletePerson }

export default personServices