import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const PersonList = (props) => {
    const { people, removeFromDom } = props

    return (
        <div>
            {people.map( (person, index) => {
                return  <p key={index}>
                            <Link to={'/people/'+person._id}>
                                {person.lastName}, {person.firstName}
                            </Link>
                            {" | "}
                            <Link to={"/people/" + person._id + "/edit"}>
                                Edit
                            </Link>
                            {" | "}
                            <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)} />
                        </p>
            })}
        </div>
    )
}

export default PersonList