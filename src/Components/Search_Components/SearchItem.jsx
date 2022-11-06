import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './SearchItem.scss'

import { Link } from 'react-router-dom'

//import Radisson from "../../Assets/items/radisson_blu.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../Pagination'



const SearchItem = () => {

  const [item, setItem] = useState([]);

  useEffect(() =>{
    const fetch = async ()=>{
      try{
        const { data } = await axios.get('http://localhost:3000/item');
        setItem(data);
      }
      catch(err){
        console.error(err);
      }
    };
    fetch();
  },[]);

  return (
    <div className='searchitemContainer'>
      {item.map(item=>{
        return(
          <div className="searchitemContents" key={item.id}>
            <div className="searchcontentsLeft">
              <Link to={`/searchresult/venuedetails/${item.id}`}><img src={item.img} alt="" /></Link>
            </div>
            <div className="searchcontentsRight">
              <div className="searchitemTop">
                <div className="leftInfo">
                  <Link to={`/searchresult/venuedetails/${item.id}`}><h4>{item.title}</h4></Link>
                  <FontAwesomeIcon icon={faLocationDot} className='icon address' />
                  <span>{item.location}</span>
                  <h5>Capacity - {item.capacity} Person</h5>
                  <p>{item.shortdesc}:</p>
                </div>

                <div className="rightInfo">
                  <div> 
                    <FontAwesomeIcon icon={faStar} className='icon star' />
                    <FontAwesomeIcon icon={faStar} className='icon star' />
                    <FontAwesomeIcon icon={faStar} className='icon star' />
                    <FontAwesomeIcon icon={faStar} className='icon star' />
                    <FontAwesomeIcon icon={faStar} className='icon star' />
                    </div>
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