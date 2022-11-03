import React from 'react'

import './VenueDetailsDescription.scss'

const VenueDetailsDescription = (props) => {
  return (
    <div className='venuedescriptoinContainer'>
          <div className="venuedescriptionContents">
            <h4>{props.data.descriptive_title}</h4>
            <p>{props.data.description}</p>
          </div>
      
    </div>
  )
}

export default VenueDetailsDescription