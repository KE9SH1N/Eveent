import React from 'react'
import './LoginNavbar.scss'

import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

const LoginNavbar = () => {
  return (
    <div className='navContainer'>
      <div className="navbar">
        <Link to="/"><img src={Logo} className="logoImg" alt="logo img"/></Link>
      </div>
    </div>
  )
}

export default LoginNavbar