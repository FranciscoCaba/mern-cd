import React from 'react'

const InfoInput = ({info, setInfo}) => {
    return (
        <div>
            <form>
                <div className='row'>
                    <label className="col-sm-4" htmlFor='firstName'>First Name</label>
                    <input id='firstName' className="col form-control" type="text" onChange={ (e) => setInfo.setFirstName(e.target.value) } value={info.firstName}/>
                </div>
                <div className='row'>
                    <label className="col-sm-4" htmlFor='lastName'>Last Name</label>
                    <input id="lastName" className="col form-control" type="text" onChange={ (e) => setInfo.setLastName(e.target.value) } value={info.lastName}/>
                </div>
                <div className='row'>
                    <label className="col-sm-4" htmlFor='email'>Email</label>
                    <input id="email" className="col form-control" type="text" onChange={ (e) => setInfo.setEmail(e.target.value) } value={info.email}/>
                </div>
                <div className='row'>
                    <label className="col-sm-4" htmlFor='password'>Password</label>
                    <input id="password" className="col form-control" type="password" onChange={ (e) => setInfo.setPassword(e.target.value) } value={info.password}/>
                </div>
                <div className='row'>
                    <label className="col-sm-4" htmlFor='confirmPass'>Confirm Password</label>
                    <input id="confirmPass" className="col form-control" type="password" onChange={ (e) => setInfo.setConfirmPass(e.target.value) } value={info.confirmPass}/>
                </div>
            </form>
        </div>
    )
}

export default InfoInput