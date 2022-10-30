import React from 'react'
import './VenueDetailsHead.scss'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const venuedetailsHead = () => {
  return (
    <div className='venuedetailsheadContainer'>
        <div className="venuedetailsheadContents">
            <div className="venuedetailsLeft">
                <h4>Radisson Blu</h4>
                 <FontAwesomeIcon icon={faLocationDot} className='icon address' />
                <span>Airport road, Dhaka - 1212</span>
            </div>
              <div className="venuedetailsRight">
                <Link to=""><button>book now</button></Link>
              </div>
        </div>
    </div>
  )
}

export default venuedetailsHead