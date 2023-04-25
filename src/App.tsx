import React from 'react';


import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';

import MainTemplate from 'template/MainTemplate';
import Login from 'pages/account/Login';
import Signup from 'pages/account/Signup';
import Project from 'pages/project/Project';
import Task from 'pages/project/Task';
import AppRoute from 'HOC/AppRoute';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='' element={    <Login/>    } />
        
        <Route  path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Navigate to={'/signin'}/>}></Route>

        <Route path='project' element={<AppRoute Component={<MainTemplate/>} isAuth />}>
          <Route index path='detail' element={<AppRoute Component={<Project/>} isAuth  isAdmin  />}></Route>
          <Route path='task' element={<Task/> }></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
