import React from 'react'
import './OfferItem.scss'
import Offer1 from '../../Assets/offers/offer1.jpeg'
import { Link } from 'react-router-dom'

const OfferItem = () => {
  return (
    <div className='offeritemContainer'>
        <div className="offeritemContents">
            <Link to=""><img src={Offer1} alt="" /></Link>
            <div className="offerInfo">
                <h5>Save 25% on your first booking</h5>
                <p>Grab the best deal based on your catagory. Book and make your event more easier</p>
            </div>
        </div>
    </div>
  )
}

export default OfferItem