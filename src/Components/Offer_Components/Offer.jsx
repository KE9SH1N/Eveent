import React from 'react'
import './Offer.scss'

import OfferItem from '../Offer_Components/OfferItem'

const Offer = () => {
  return (
    <div className='offerContainer'>
      <h4>offers</h4>
      <OfferItem/>
    </div>
  )
}

export default Offer