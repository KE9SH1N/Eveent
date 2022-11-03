import React from 'react'


import './VenueDetailsImage.scss'


const VenueDetailsImage = (props) => {
  
  return (
    <div className='detailsimgConatinar'>
      <div className="rowoneConetents">
        <img src={props.data.img1} alt="" className='imgPrimary' />
        <img src={props.data.img2} alt="" className='imgWide' />
      </div>

      <div className="rowtwoConetents">
        <img src={props.data.img3} alt="" />
        <img src={props.data.img4} alt="" />
      </div>
    </div>
  )
}

export default VenueDetailsImage