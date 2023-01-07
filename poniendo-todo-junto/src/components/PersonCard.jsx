import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        // const { firstName, lastName, age, hairColor } = this.props;
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }
    updateAge = ()=>{
        this.setState((state)=>({ age: state.age/1+1 }));
    }
    render() {
        return (
            <div>
                <h2>{this.state.lastName}, {this.state.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <div className="d-grid gap-2">
                    <button onClick={this.updateAge} className="btn btn-secondary btn-sm">Birthday Button for {this.state.firstName} {this.state.lastName}</button>
                </div>
            </div>
        )
    }
}

export default PersonCard;