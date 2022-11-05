import React from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom'
import LoginSocial from '../LoginSocial'



const LoginForm = () => {
  return (
    <div className='formContainer'>
      <form action="" className='loginForm'>
        <div className='formContent'>
          <span>Sign in or create an account</span>
          <div className='formInput'>
            <input type="text" placeholder='email or phone number' />
            <input type="password" placeholder='password' />
          </div>
          <div className='btnLogin'>
            <Link to=""><button type='submit' >login</button></Link>
          </div>
        </div>
      </form>

      <div className='formBottomContent'>
        <LoginSocial/>
        <Link to="" className='regLink'>Not a member? Sign up</Link>
      </div>
    </div>
  )
}

export default LoginForm