import { OfflineShareRounded } from '@mui/icons-material'
import React from 'react'
import Category from '../Components/Category_Components/Category'
import Hero from '../Components/Hero_Components/Hero'
import Navbar from '../Layouts/Navbar'
import Offer from '../Components/Offer_Components/Offer'
import Services from '../Components/Services_Components/Services'
import Cities from '../Components/Cities'
import Footer from '../Layouts/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Offer/>
      <Services/>
      <Cities/>
      <Footer/>
    </div>
  )
}

export default Landing