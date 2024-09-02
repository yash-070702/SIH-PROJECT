import React from 'react'
import Homepage from './pages/Homepage'
import {Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import SearchPage from './pages/SearchPage';
import Aboutus from './pages/Aboutus';
import Navbar from "./components/Navbar";




const App = () => {

  return (
    <div className=''>
     <Navbar/>
     
      <Routes>
      <Route path="about" element={<Aboutus/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={ <Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Searchpage" element={<SearchPage/>}/>
      </Routes>
    </div>
  )
}

export default App
