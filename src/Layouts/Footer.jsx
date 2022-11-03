import React from 'react'
import './Footer.scss'

import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContents">
        <div className="leftContents">
          <Link to="/"><img src={Logo} alt="logo img" /></Link>
          <p> &copy; 2022 eveent.com.bd</p>
        </div>
        <div className="rightContents">
          <ul>
            <li><span>cookie settings</span></li>
            <li><span>privacy policy</span></li>
            <li><span>terms of services</span></li>
            <li><span>Acceptable use ploicy</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer