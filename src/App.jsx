import React from 'react'
import Homepage from './pages/Homepage'
import {Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SearchPage from "./pages/SearchPage"


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
