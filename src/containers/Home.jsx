import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from "../components/HeroSlider"
import AboutUs from '../components/AboutUs'
import OurLocations from '../components/OurLocations'

const Home = () => {
  return (
    <>   
         <HeroSlider/>
         <AboutUs/>
         <OurLocations/>
    </>
  )
}

export default Home
