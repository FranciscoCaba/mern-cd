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
    
    return (
        <>
            <PersonForm />
            { loaded && <PersonList people={people} />}
        </>
    )
}

export default Main