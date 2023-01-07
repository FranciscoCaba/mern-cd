import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-secondary btn-sm">Birthday Button for {firstName} {lastName}</button>
                </div>
            </div>
        )
    }
}

export default PersonCard;