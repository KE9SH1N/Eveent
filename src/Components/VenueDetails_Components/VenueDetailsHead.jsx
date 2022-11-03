import React from 'react'
import './VenueDetailsHead.scss'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'



const VenuedetailsHead = (props) => {
  return (
    <div className='venuedetailsheadContainer'>
        <div className="venuedetailsheadContents">
              <div className="venuedetailsLeft">
                <h4>{props.data.title}</h4>
                <FontAwesomeIcon icon={faLocationDot} className='icon address' />
                <span>{props.data.location}, {props.data.city} - {props.data.postalcode}</span>
              </div>
              <div className="venuedetailsRight">
                <Link to=""><button>book now</button></Link>
              </div>
        </div>
    </div>
  )
}

export default VenuedetailsHead