import './App.css';
import Main from './views/Main';
import Detail from './components/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/people' element={<Main/>}/>
          <Route path='/people/:id' element={<Detail />}/>
          <Route path='/people/:id/edit' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
