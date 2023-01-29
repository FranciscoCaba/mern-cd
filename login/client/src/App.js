import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import AlgoCuandoInicia from './components/AlgoCuandoInicia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/algo'element={<AlgoCuandoInicia/>}/>
          <Route path='/registro'element={<Registro/>}/>
          <Route path='/login'element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;