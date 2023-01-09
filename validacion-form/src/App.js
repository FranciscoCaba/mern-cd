import './App.css';
import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

const nameToText = {
  firstName: "First Name",
  lastName: "Last Name"
}

function reducer(state, action){
  return ({
    ...state,
    [action.name]: {
      value: action.value,
      error: action.error
    }
  })
}

function validate(name, value){
  // eslint-disable-next-line
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(value.length === 0){
    return null;
  }

  if(name==="firstName" || name==="lastName"){
    if( value.length < 5 ){
      return nameToText[name] + " must be at least 5 characters"
    }
  }else{
    if(!value.match(mailformat)){
      return "Wrong email address format"
    }
  }
  return null;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    dispatch({ name, value, error })
  }
  
  return (
    <form className="App">
      <label className="d-block form-label">First Name</label>
      <input value={state.firstName.value} onChange={onChange} name='firstName' className="d-block form-control" type="text" />
      {state.firstName.error !== null && (
        <p className="error">{state.firstName.error}</p>
      )}
      <label className="d-block form-label">Last Name</label>
      <input value={state.lastName.value} onChange={onChange} name='lastName' className="d-block form-control" type="text" />
      {state.lastName.error !== null && (
        <p className="error">{state.lastName.error}</p>
      )}
      <label className="d-block form-label">Email</label>
      <input value={state.email.value} onChange={onChange} name='email' className="d-block form-control" type="text" />
      {state.email.error !== null && (
        <p className="error">{state.email.error}</p>
      )}
      <button className="d-block btn btn-primary" type="button">Submit</button>
    </form>
  );
}

export default App;
