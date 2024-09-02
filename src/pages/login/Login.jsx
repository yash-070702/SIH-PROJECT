import React from 'react'
import { useState } from "react"
 import { useDispatch } from "react-redux"
 import { FaUser } from "react-icons/fa";
 import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"

import "./login.css";
import { login } from '../../services/operations/authAPI'
const Login = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
  dispatch(login(email, password, navigate))
  }

  return (
<div className='flex items-center justify-center bg-[#141b2d] w-screen h-screen' > 
    <div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
     <form
      onSubmit={handleOnSubmit}>
    
      <div>
						<label htmlFor="name">Email</label>
            <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter you mail"
          
        />
					</div>
					<div>
						<label htmlFor="e-mail">Password</label>
            <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
           placeholder="Enter you Pssword"

        />
					</div>
					<button type="submit" className="btn" >
					Login
					</button>

      <div className="link">
                   <p> Don't have an account?<a href="#"  onClick={()=>navigate("/signup")} className="signup_link"> Sign-up </a></p>
               </div>
               <div className="link"> <p>&copy; 2024 ThreatLens. All Rights Reserved.</p></div>
    </form>
   
   </div>
    </div>
</div>

    
   
   
  )

  
}

export default Login;
