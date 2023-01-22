import React, { useEffect } from 'react'
import HeroSection from '../CommonComponent/HeroSection'
import { useGlobalContext } from '../Context'

const About = () => {
  const {updateAbout} = useGlobalContext();
useEffect(() =>updateAbout(), [])
  return (
    <HeroSection/>
   )
}

export default About