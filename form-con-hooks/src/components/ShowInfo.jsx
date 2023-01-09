import React from 'react'

const ShowInfo = ({info}) => {
    return (
        <div>
            <p className='text-center'>Your Form Data</p>
            <p className='row'>
                <span className='col-lg-4 text-center'>First Name</span>
                <span className='col-lg-8'>{info.firstName}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Last Name</span>
                <span className='col-lg-8'>{info.lastName}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Email</span>
                <span className='col-lg-8'>{info.email}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Password</span>
                <span className='col-lg-8'>{info.password}</span>
            </p>
            <p className='row'>
                <span className='col-lg-4 text-center'>Confirm Password</span>
                <span className='col-lg-8'>{info.confirmPass}</span>
            </p>
        </div>
    )
}

export default ShowInfo