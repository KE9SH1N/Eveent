import React from 'react'

import './VenueReview.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { eveentReview } from '../../data'

import { Link } from 'react-router-dom'

const VenueReview = () => {
  return (
      <div className='venuereviewContainer'>
          <h4>Reviews</h4>
          {eveentReview.map(review=>{
            return(
                <div className="venuereviewContent">
                    <div className="venuereviewContents">
                        <div className="venuereviewLeft">
                            <h5>{review.writerName}</h5>
                            <p className='week'>{review.week}</p>
                        </div>
                        <div className="venuereviewRight">
                            <FontAwesomeIcon icon={faStar} className='icon star' />
                            <span>{review.rating}</span>
                        </div>
                    </div>
                    <div>
                        <p>{review.paragraph}</p>
                    </div>
                </div>
            )
          })}
          <div className='viewMore'>
              <Link to=""><button>view more</button></Link>
          </div>
      </div>
  )
}

export default VenueReview