import React from 'react'
import { logout } from '../services/operations/authAPI'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const SearchPage = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
  return (
    <div className='bg-yellow-500'>
      Hello
      <button onClick={()=>{
        dispatch(logout(navigate))
      }}>LogOut</button>
    </div>
  )
}

export default SearchPage
