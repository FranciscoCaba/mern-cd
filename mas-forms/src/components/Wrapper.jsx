import React, {useState} from 'react'
import InfoInput from './InfoInput'
import ShowInfo from './ShowInfo';

const Wrapper = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const info = { firstName, lastName, email, password, confirmPass };
    const setInfo = { setFirstName, setLastName, setEmail, setPassword, setConfirmPass };
    return (
        <>
            <InfoInput info={info} setInfo={setInfo} />
            <ShowInfo info={info} />
        </>
    )
}

export default Wrapper