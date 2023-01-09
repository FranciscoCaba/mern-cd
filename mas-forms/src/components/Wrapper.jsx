import React, {useState} from 'react'
import InfoInput from './InfoInput'
import ShowInfo from './ShowInfo';

const Wrapper = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    return (
        <>
            <InfoInput state={state} setState={setState} />
            <ShowInfo state={state} />
        </>
    )
}

export default Wrapper