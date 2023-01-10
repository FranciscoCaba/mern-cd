import React, { useState } from 'react'


function ColorInput(props) {

    const [state, setState] = useState({
        color: '',
        size: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        props.addProps(state);
        setState({
            color: '',
            size: ''
        })
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className="col-lg-2">
                    <label>Color</label>
                </div>
                <div className="col-lg-10">
                    <input value={state.color} onChange={handleChange} name="color" type="text" className="form-control" />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-2">
                    <label>Size</label>
                </div>
                <div className="col-lg-10">
                    <input value={state.size} onChange={handleChange} name="size" type="text" className="form-control" />
                </div>
            </div>
            <div>
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default ColorInput