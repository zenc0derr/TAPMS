import { useState } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login/Login';

window.auth = false;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
    
  );
}

export default App;
