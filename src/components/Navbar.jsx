import React from 'react'
import Logo from "../assets/Screenshot_2024-09-02_232745-removebg-preview.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI'
const Navbar = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {token}=useSelector((state)=>state.auth);
    // const {user}=useSelector((state)=>state.profile)
  return (
    <div className='w-full flex justify-around items-center bg-blue-500'>
     <Link to="/"> <img src={Logo} width={150}/></Link>
     <div className='flex gap-10 font-bold text-lime-100 text-[1.2rem]'>
     <Link to="/">Home</Link>
     <Link to="/about">About Us</Link>
     </div>
      
{token===null && ( <div className="flex gap-4 items-center  pl-5 my-2">
          <Link to="/signup">
            <button className="border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="border border-richblack-700 bg-slate-500 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Log In
            </button>
          </Link>
        </div>)}

    {token && (  <div className="flex gap-4 items-center  pl-5 my-2">  <button className="border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transition-all duration-200" onClick={()=>{
        dispatch(logout(navigate))
      }}>LogOut</button>
      </div>)}    

     
    </div>
  )
}

export default Navbar
