import React from 'react'
import './LoginSocial.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const LoginSocial = () => {
  return (
    <div className='contents'>
        <h5 className='socialHeading'>With your social network</h5>
        <div className="formSocialIcons">
            <FontAwesomeIcon icon={faFacebookSquare} className='icon facebook' />
            <FontAwesomeIcon icon={faGooglePlusSquare} className='icon googlePlus' />
            <FontAwesomeIcon icon={faTwitterSquare} className='icon twitter' />
        </div>
    </div>
  )
}

export default LoginSocial