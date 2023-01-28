import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PersonForm from './PersonForm'

const Update = () => {
    const { id } = useParams()
    const [person, setPerson] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+id)
            .then( res => {
                setPerson(res.data)
                setLoaded(true)
            })
    }, [id])
    
    const updatePerson = (person) => {
        axios.put("http://localhost:8000/api/people/"+id , person)
            .then( res => console.log(res.data))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {
                loaded && (
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                )
            }
        </div>
    )
}

export default Update