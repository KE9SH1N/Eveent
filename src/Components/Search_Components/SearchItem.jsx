import React from 'react'
import './SearchItem.scss'

import { Link } from 'react-router-dom'

//import Radisson from "../../Assets/items/radisson_blu.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import {eveentItem} from '../../data'
import Pagination from '../Pagination'

const SearchItem = () => {
  return (
    <div className='searchitemContainer'>
      {eveentItem.map(item=>{
        return(
          <div className="searchitemContents">
            <div className="searchcontentsLeft">
              <Link to="/venuedetails"><img src={item.img} alt="" /></Link>
            </div>
            <div className="searchcontentsRight">
              <div className="searchitemTop">
                <div className="leftInfo">
                  <Link to="/venuedetails"><h4>{item.title}</h4></Link>
                  <FontAwesomeIcon icon={faLocationDot} className='icon address' />
                  <span>{item.location}</span>
                  <h5>Capacity - {item.capacity} Person</h5>
                  <p>{item.shortdesc}:</p>
                </div>

                <div className="rightInfo">
                  <FontAwesomeIcon icon={faStar} className='icon star' />
                  <FontAwesomeIcon icon={faStar} className='icon star' />
                  <FontAwesomeIcon icon={faStar} className='icon star' />
                  <FontAwesomeIcon icon={faStar} className='icon star' />
                  <FontAwesomeIcon icon={faStar} className='icon star' />

                  <h5>৳{item.regularPrice}</h5>

                  <h3>৳ {item.offerPrice}</h3>
                </div>
              </div>

              <div className="searchitemBottom">
                <h4>Catering</h4>
                <h4>Decorator Service</h4>
                <h4>Car Parking</h4>
              </div>
            </div>
          </div>
        )
      })}

      <Pagination />
      
    </div>
  )
}

export default SearchItem