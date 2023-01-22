import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar';
import ResponseInfo from './components/ResponseInfo';

function App() {
  const [state, setState] = useState({
    id: '',
    action: ''
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'
            element={
              <>
                <SearchBar info={state} setInfo={setState}/>
                <ResponseInfo info={state} setInfo={setState}/>
              </>
            }
          />
          <Route path='/:id'
            element={
              <>
                <SearchBar info={state} setInfo={setState}/>
                <ResponseInfo info={state} setInfo={setState}/>
              </>
            }
          />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
