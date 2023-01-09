import React from 'react'

const ShowInfo = ({state}) => {
    return (
        <div>
            <p className='text-center'>Your Form Data</p>
            <p className='row'>
                <span className='col-lg-4 text-center'>First Name</span>
                <span className='col-lg-8'>{state.firstName}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Last Name</span>
                <span className='col-lg-8'>{state.lastName}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Email</span>
                <span className='col-lg-8'>{state.email}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Password</span>
                <span className='col-lg-8'>{state.password}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Confirm Password</span>
                <span className='col-lg-8'>{state.confirmPass}</span>
            </p>
        </div>
    )
}

export default ShowInfo