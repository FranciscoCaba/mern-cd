import React from 'react'

const PersonList = (props) => {
    const { people } = props
    return (
        <div>
            {people.map( (person, index) => {
                return <p key={index}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}

export default PersonList