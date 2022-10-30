import React from 'react'

import './Filter.scss'

const Filter = () => {
  return (
    <div className='filterContainer'>
      <div className="filterContent">
        <h4>38 Hall found</h4>
        <span>Short by</span>
        <select name="" id="">
          <option value="" selected disabled>Default</option>
          <option value="">Popularity</option>
          <option value="">Name(A-Z)</option>
          <option value="">Name(Z-A)</option>
          <option value="">Price(Low-High)</option>
          <option value="">Price(High-Low)</option>
        </select>


      </div>
    </div>
  )
}

export default Filter