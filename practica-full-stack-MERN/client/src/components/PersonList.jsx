import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PersonList = (props) => {
    const { people, removeFromDom } = props

    const deletePerson = (personId) => {
        axios.delete("http://localhost:8000/api/people/"+personId)
            .then((res)=>removeFromDom(personId))
    }
    
    return (
        <div>
            {people.map( (person, index) => {
                return  <p key={index}>
                            <Link to={'/people/'+person._id}>
                                {person.lastName}, {person.firstName}
                            </Link>
                            {" | "}
                            <button onClick={(e) => {deletePerson(person._id)}}>Delete</button>
                        </p>
            })}
        </div>
    )
}

export default PersonList