import React from 'react'
import './LoginNavbar.scss'

import Logo from "../Assets/logo.png"

const LoginNavbar = () => {
  return (
    <div className='navContainer'>
      <div className="navbar">
        <img src={Logo} alt="logo img" />
      </div>
    </div>
  )
}

export default LoginNavbar