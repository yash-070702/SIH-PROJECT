import React from 'react'
import Homepage from './pages/Homepage'
import {Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import SearchPage from "./pages/SearchPage"
=======
import SearchPage from './pages/SearchPage';
>>>>>>> 38ad53e327900f57282489c39d8566920584ac0b

const App = () => {

  return (
    <div className=''>
     
     
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={ <Signup />}/>
      <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
      <Route path="/Search-page" element={<SearchPage/>}/>
=======
      <Route path="/searchpage" element={<SearchPage/>}/>
>>>>>>> 38ad53e327900f57282489c39d8566920584ac0b
      </Routes>
    </div>
  )
}

export default App
