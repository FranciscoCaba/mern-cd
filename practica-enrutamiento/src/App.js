import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayPage from './components/DisplayPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<WelcomePage />}/>
          <Route path="/:value" element={<DisplayPage/>}/>
          <Route path='/:value/:color' element={<DisplayPage/>}/>
          <Route path='/:value/:color/:bgColor' element={<DisplayPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
