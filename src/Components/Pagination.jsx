import React from 'react'

import './Pagination.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Pagination = () => {
  return (
    <div className='paginationContainer'>
        <div className="paginationContents">
            <FontAwesomeIcon icon={faChevronLeft} className='icon arrow'/>
                <div className='pageNumber'>
                    <li>
                        <span>1</span>
                    </li>
                    <li>
                        <span>2</span>
                    </li>
                  <FontAwesomeIcon icon={faEllipsis} className='icon ellipsis' />
                </div>
            <FontAwesomeIcon icon={faChevronRight} className='icon arrow'/>
        </div>
        <div className="showitemNumber">
            <span>showing 1 - 8</span>
        </div>
        
    </div>
  )
}

export default Pagination