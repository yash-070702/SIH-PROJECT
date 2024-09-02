import React from 'react'
import FirstImage from "../assets/FirstImage.png"
import SecondImage from "../assets/SecondImage.png"
const Aboutus = () => {
  return (
    <div>
    <img src={FirstImage} className="w-full"/>  
    <img src={SecondImage}/>
    </div>
  )
}

export default Aboutus
