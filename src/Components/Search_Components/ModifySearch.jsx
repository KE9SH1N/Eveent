import React from 'react'

import './ModifySearch.scss'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const ModifySearch = () => {
  return (
    <div className='modifysearchContainer'>
      <div className="modifysearchContents">
        <div className="leftContent">
          <div className="tab weeding">
            <FontAwesomeIcon icon={faBars} className='icon bar' />
            <span>weeding</span>
          </div>
          <div className="tab location">
            <FontAwesomeIcon icon={faLocationDot} className='icon location' />
            <span>khilkhet,dhaka</span>
          </div>
          <div className="tab date">
            <FontAwesomeIcon icon={faCalendar} className='icon calendar' />
            <span>17 october 2022</span>
          </div>
        </div>
        <div className="rightContent">
          <Link to=""><button>modify search</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ModifySearch