import React from 'react'
import './Hero.scss'


import Background from "../../assets/heroBackground.jpg"
import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <div className='heroContainer'>
        <img src={Background} alt=""/>
        <div className="heroheadText">
            <h3>Search a venue for your function</h3>
        </div>
      <SearchBar/>
    </div>
  )
}

export default Hero