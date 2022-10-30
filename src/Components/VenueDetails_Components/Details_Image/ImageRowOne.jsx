import React from 'react'

import './ImageRowOne.scss'


import { Link } from 'react-router-dom'

import  radissionp  from '../../../Assets/items/item_details/Radisson1.webp'
import radissionp2 from '../../../Assets/items/item_details/Radisson2.jpg'
const ImageRowOne = () => {
  return (
    <div className='rowoneConatinar'>
        <div className="rowoneConetents">
            <Link to=""><img src={radissionp} alt="" className='imgPrimary' /></Link>
            <Link to=""><img src={radissionp2} alt="" className='imgWide' /></Link>
        </div>
    </div>
  )
}

export default ImageRowOne