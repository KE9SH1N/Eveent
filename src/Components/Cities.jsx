import React from 'react'
import './Cities.scss'

import { eveentCities } from '../data'

import { Link } from 'react-router-dom'
const Cities = () => {
  return (
    <div className="cityContainer">
        <div className="cityContents">
            <h4>cities</h4>
            <div className="gridContainer">
                {eveentCities.map(cities=>{
                        return(
                <div className="gridItem">
                    <h5>{cities.city}</h5>
                        <ul>
                            <li><span>{cities.hall}</span></li>
                            <li><span>{cities.resturant}</span></li>
                            <li><span>{cities.catering}</span></li>
                            <li><span>{cities.indoorStadium}</span></li>
                        </ul>
                </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cities