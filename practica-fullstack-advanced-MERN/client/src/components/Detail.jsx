import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
    const [person, setPerson] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+id)
            .then( res => setPerson({...res.data}))
    }, [id])
    

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to={"/people/"+person._id+"/edit"}>Edit</Link>
        </div>
    )
}

export default Detail