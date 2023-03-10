import React, { useState } from 'react'
import axios from 'axios'

const PersonForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function onSubmitHandler(e){
        e.preventDefault()
        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
        })
            .then( res => console.log(res) )
            .catch( err => console.log(err) )
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name: </label>
                <input type="text" onChange={e=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" onChange={e=>setLastName(e.target.value)}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PersonForm