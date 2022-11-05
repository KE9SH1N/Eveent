import React from 'react'
import './SignUpForm.scss'
import LoginSocial from '../LoginSocial'

import { Link } from 'react-router-dom'



const SignUpForm = () => {
  return (
    <div className='formContainer'>
      <form action="" className='signupForm'>
        <div className="formContent">
          <span>Create an account</span>
          <div className="formInput">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder='password' />
            <input type="text" placeholder='confirm password' />
          </div>

          <div className='checkboxInput'>
            <input type="checkbox" />
            <label ><span>By creating account you agree to our</span> <Link to="" className='termLink'>Terms & Conditions</Link></label>
          </div>

          <div className="btnSignUp">
            <Link to=""><button type='submit'>sign up</button></Link>
          </div>
        </div>
        
      </form>

      <div className='formBottomContent'>
        <LoginSocial />
        <Link to="" className='regLink'>Already have an account? Log In</Link>
      </div>
    </div>
  )
}

export default SignUpForm