import React from 'react'

const InfoInput = ({state, setState}) => {
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form>
            <div className='row'>
                <label className="col-sm-4" htmlFor='firstName'>First Name</label>
                <input id='firstName' name='firstName' className="col form-control" type="text" onChange={ onChange } value={state.firstName}/>
            </div>
            <div className='row'>
                <label className="col-sm-4" htmlFor='lastName'>Last Name</label>
                <input id="lastName" name="lastName" className="col form-control" type="text" onChange={ onChange } value={state.lastName}/>
            </div>
            <div className='row'>
                <label className="col-sm-4" htmlFor='email'>Email</label>
                <input id="email" name="email" className="col form-control" type="text" onChange={ onChange } value={state.email}/>
            </div>
            <div className='row'>
                <label className="col-sm-4" htmlFor='password'>Password</label>
                <input id="password" name="password" className="col form-control" type="password" onChange={ onChange } value={state.password}/>
            </div>
            <div className='row'>
                <label className="col-sm-4" htmlFor='confirmPass'>Confirm Password</label>
                <input id="confirmPass" name="confirmPass" className="col form-control" type="password" onChange={ onChange } value={state.confirmPass}/>
            </div>
        </form>
    )
}

export default InfoInput