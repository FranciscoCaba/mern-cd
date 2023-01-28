import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'

const Main = () => {
    const [people, setPeople] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then( res => {
                setPeople(res.data)
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }, [])

    const createPerson = (person) => {
        axios.post("http://localhost:8000/api/people", person)
            .then( res => setPeople([...people, res.data]) )
    }

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }
    
    return (
        <>
            <PersonForm onSubmitProp = {createPerson} initialFirstName = "" initialLastName = ""/>
            { loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </>
    )
}

export default Main