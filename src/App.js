import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Resources from './components/Resources';
import Thesis from './components/Thesis';
import './App.css';



function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/thesis' element={ <Thesis />} />
        <Route path='/resources' element={ <Resources />} />
        <Route path='/signup' element={ <Signup />} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
