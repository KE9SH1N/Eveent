import React from 'react'
import './LoginForm.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'
import LoginSocial from './LoginSocial'



const LoginForm = () => {
  return (
    <div className='formContainer'>
      <form action="">
        <span>Sign in or create an account</span>
        <input type="text" placeholder='email or phone number' />
        <input type="password" placeholder='password' />
        <Link to=""><button type='submit'>login</button></Link>
      </form>

      <div className='formBottomContent'>
        <LoginSocial/>
        <Link to="" className='regLink'>Not a member? Sign up</Link>
      </div>
    </div>
  )
}

export default LoginForm