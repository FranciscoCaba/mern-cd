import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayPage = () => {
    const { value, bgColor, color } = useParams();
    return (
        <h2 style={{backgroundColor: bgColor, color: color}}>
            {
                isNaN(value)?"The word is: "+value:"The number is: "+value
            }
        </h2>
    )
}

export default DisplayPage