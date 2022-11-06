import React from 'react'
import './Navbar.scss'

import { Link } from 'react-router-dom'
import mainLogo from "../Assets/mainLogo.png"

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="navbarContent">
        <div className="leftContent">
          <Link to="/"><img src={mainLogo} alt="logo img" /></Link>
        </div>
        <div className="rightContent">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/services"><li>Service</li></Link>
            <Link to=""><li>Contact Us</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/signup"><li className='navReg'>Registration</li></Link>
            
            
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar