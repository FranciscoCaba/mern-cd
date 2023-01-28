import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+id)
            .then( res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
    }, [id])
    
    const updatePerson = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/people/"+id , {
            firstName,
            lastName
        })
            .then( res => console.log(res.data))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name:</label><br />
                    <input type="text" name='firstName' value={firstName} onChange={e=>setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name:</label><br />
                    <input type="text" name='lastName' value={lastName} onChange={e=>setLastName(e.target.value)} />
                </p>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Update