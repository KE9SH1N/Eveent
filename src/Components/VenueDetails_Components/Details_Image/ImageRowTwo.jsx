import React from 'react'

import './ImageRowTwo.scss'

import { Link } from 'react-router-dom'

import radissionp3 from '../../../Assets/items/item_details/Radisson3.jpg'
import radissionp4 from '../../../Assets/items/item_details/Radisson4.jpg'

const ImageRowTwo = () => {
  return (
    <div className='rowtwoConatinar'>
      <div className="rowtwoConetents">
        <Link to=""><img src={radissionp3} alt=""/></Link>
        <Link to=""><img src={radissionp4} alt=""/></Link>
      </div>
    </div>
  )
}

export default ImageRowTwo