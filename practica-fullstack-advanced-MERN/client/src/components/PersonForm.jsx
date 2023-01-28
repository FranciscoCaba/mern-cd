import React, { useState } from 'react'
// import axios from 'axios'

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp} = props
    const [firstName, setFirstName] = useState(initialFirstName)
    const [lastName, setLastName] = useState(initialLastName)

    function onSubmitHandler(e){
        e.preventDefault()
        onSubmitProp({firstName, lastName})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PersonForm