import React from 'react'
import { useState } from "react"
import "../login/login.css"
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Si1Password } from "react-icons/si";
 import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSignupData } from '../../slices/authSlice'
import {signUp} from "../../services/operations/authAPI"
const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const showPassword=false;
    const showConfirmPassword=false;


  
    const [formData, setFormData] = useState({
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    const { firstName, email, password, confirmPassword } = formData
  
    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
  
    // Handle Form Submission
    const handleOnSubmit = (e) => {
      e.preventDefault()
  
      if (password !== confirmPassword) {
        toast.error("Passwords Do Not Match")
        return
      }
      const signupData = {
        ...formData,
     
      }
  
      // Setting signup data to state
      // To be used after otp verification
      dispatch(setSignupData(signupData))
    //   // Send OTP to user for verification
    //   dispatch(sendOtp(formData.email, navigate))
    dispatch(signUp(formData.firstName,formData.email,formData.password,formData.confirmPassword,navigate))
      // Reset
      setFormData({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    }
  
    // data to pass to Tab component

  
    return (
      <div className='flex items-center justify-center bg-[#141b2d] w-screen h-screen'>
      <div className='wrapper signUp'>
  <div className="form">
  <div className="heading">SIGN-UP</div>
<form onSubmit={handleOnSubmit}>
   
  

    <div>
              <label htmlFor="name">Name</label>
              <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder='Enter Your Name'
          />
            </div>
       

            <div>
              <label htmlFor="name">E-Mail</label>
             
              <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder='Enter Your Email-Address'
        />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder='Enter Your Password'
          
          />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
        placeholder='Confirm Your Password'
        onChange={handleOnChange}
           />
            </div>
            <button className='btn'
        type="submit" > Create Account
      </button>
           
            
             

      <div className="link">
               <p>You already have an account?<a href="#" onClick={()=>navigate("/login")}  className="signup_link">Sign-in</a>
               </p>
           </div>
       <div className="link"> <p>&copy; 2024 ThreatLens. All Rights Reserved.</p></div>
    </form>
    </div>
  </div>
  </div>
      
    )

}

export default Signup
