import React from 'react';


import './App.scss';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Signup from './pages/Signup';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/signin' element={<Login/>} />
        <Route index path='/signup' element={<Signup/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
