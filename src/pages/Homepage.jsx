import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
   <Link to="/signup">

<button className='border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1  lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transtion-all duration-200 '>Sign Up</button>
</Link>

<Link to="/login">
      <button className='border border-richblack-700 bg-richblack-700 text-[12px] lg:text-[16px] px-2 py-1  lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transtion-all duration-200 '>Log In</button>
    </Link>
    </div>
  )
}

export default Homepage
