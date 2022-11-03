import React from 'react'
import './SearchBar.scss'

import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='searchContainer'>
        <div className="searchContents">
            <div className="searchbyCategory">
                <FontAwesomeIcon icon={faBars} className='icon bar'/>
                <span>Select Catagory</span>
            </div>
            <div className="searchbyLocation">
                <span>locations</span>
                <FontAwesomeIcon icon={faLocationCrosshairs} className='icon location' />
            </div>
            <div className="searchbyDate">
                <input type="text" placeholder='dd/mm/yy' />
                <FontAwesomeIcon icon={faCalendar} className='icon calendar' />
            </div>
            <Link to="/searchresult"><button><FontAwesomeIcon icon={faMagnifyingGlass} className='icon search' /></button></Link>
        </div>
    </div>
  )
}

export default Search