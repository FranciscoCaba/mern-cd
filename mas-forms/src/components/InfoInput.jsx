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
            <p>
            {
                state.firstName.length > 0 && state.firstName.length < 2 ?
                    "First Name must be at least 2 characters" :
                    ""
            }
            </p>
            <div className='row'>
                <label className="col-sm-4" htmlFor='lastName'>Last Name</label>
                <input id="lastName" name="lastName" className="col form-control" type="text" onChange={ onChange } value={state.lastName}/>
            </div>
            <p>
            {
                state.lastName.length > 0 && state.lastName.length < 2 ?
                    "Last Name must be at least 2 characters" :
                    ""
            }
            </p>
            <div className='row'>
                <label className="col-sm-4" htmlFor='email'>Email</label>
                <input id="email" name="email" className="col form-control" type="text" onChange={ onChange } value={state.email}/>
            </div>
            <p>
            {
                state.email.length > 0 && state.email.length < 5 ?
                    "Email must be at least 5 characters" :
                    ""
            }
            </p>
            <div className='row'>
                <label className="col-sm-4" htmlFor='password'>Password</label>
                <input id="password" name="password" className="col form-control" type="password" onChange={ onChange } value={state.password}/>
            </div>
            <p>
            {
                state.password.length > 0 && state.password.length < 8 ?
                    "Password must be at least 8 characters" :
                    ""
            }
            </p>
            <div className='row'>
                <label className="col-sm-4" htmlFor='confirmPass'>Confirm Password</label>
                <input id="confirmPass" name="confirmPass" className="col form-control" type="password" onChange={ onChange } value={state.confirmPass}/>
            </div>
            <p>
            {
                state.confirmPass.length > 0 && state.password !== state.confirmPass ?
                    "Passwords must match" :
                    ""
            }
            </p>
        </form>
    )
}

export default InfoInput