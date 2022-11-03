import React from 'react'

import './VenueDetailsFacilities.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const VenueDetailsFacilities = (props) => {
  return (
    <div className='venuefacilitiesContainer'>
        <div className="venuefacilitiesContents">
            <h4>Facilities</h4>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>{props.data.facilities1}</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>{props.data.facilities2}</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>{props.data.facilities3}</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>{props.data.facilities4}</p>
                </li>
                    
            </ul>
        </div>
    </div>
  )
}

export default VenueDetailsFacilities