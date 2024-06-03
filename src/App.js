import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './Components/Splash/Splash';
import './App.css';
import './Components/Landing/Landing';
import Landing from './Components/Landing/Landing';
import Portfolio from './Portfolio/portfolio';


function App() {
  return (
    <div>
    <Router>
        <Routes>
        
        
          
          
          <Route path="/" element={<Splash />} />
          <Route path="Landing" element={<Landing />} />
          <Route path="Portfolio" element={<Portfolio/>}/>

          
          

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
