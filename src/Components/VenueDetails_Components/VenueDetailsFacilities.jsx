import React from 'react'

import './VenueDetailsFacilities.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const VenueDetailsFacilities = () => {
  return (
    <div className='venuefacilitiesContainer'>
        <div className="venuefacilitiesContents">
            <h4>Facilities</h4>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>Car parking and unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className='icon rightArrow' />
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </li>
                    
            </ul>
        </div>
    </div>
  )
}

export default VenueDetailsFacilities