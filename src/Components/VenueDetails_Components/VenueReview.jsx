import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

import './VenueReview.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const VenueReview = () => {

    const [review,setReview] = useState([]);

    useEffect(()=>{
        const fetch = async()=>{
            try{
                const { data } = await axios.get('http://localhost:3000/review');
                setReview(data);
            }
            catch(err){
                console.error(err);
            }
        };
        fetch();
    },[]);
  return (
      <div className='venuereviewContainer'>
          <h4>Reviews</h4>
          {review.map(review=>{
            return(
                <div className="venuereviewContent" key={review.id}>
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