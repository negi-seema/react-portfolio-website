import React ,{useEffect} from 'react'
import HeroSection from '../CommonComponent/HeroSection'
import { useGlobalContext } from '../Context';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const { updateHome } = useGlobalContext();
  useEffect(() =>updateHome(), []);

  return (
   <>
     <HeroSection/>
     <Services/>
     <Contact/>
   </>
  )
}

export default Home