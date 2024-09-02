import React from 'react'
import Homepage from './pages/Homepage'
import {Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import SearchPage from './pages/SearchPage';
=======
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SearchPage from "./pages/SearchPage"

>>>>>>> b4e74ad8dcf6a3efc3b7fd11befeb97de4dae9e0

const App = () => {

  return (
    <div className=''>
     
     
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={ <Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Search-page" element={<SearchPage/>}/>
      </Routes>
    </div>
  )
}

export default App
