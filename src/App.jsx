import React from 'react';
import Home from './components/Home/Home';
import Box from './components/Table/Box';
import { Routes, Route } from 'react-router-dom';
import Buy from './components/Buy/Buy.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Sell from './components/sell/Sell';
import Navbar2 from './components/Home/Navbar2';

export default function App() {
  return (
    <div>
    <div> 
     <Navbar2  />
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/buy/:coin' element={<Buy />} />
        <Route path='/portfolio'  element={<Portfolio />} />
        <Route  path='/register'  element={<Register />}/>
        <Route path='/login'  element={<Login />} />
        <Route  path='/table' element={<Box />}  />
        <Route  path='/sell'  element={<Sell />}/>
      </Routes>
    </div>
  );
}
