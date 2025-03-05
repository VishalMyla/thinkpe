"use client"



import TrakHeroSection from './components/TrakHeroSection';
// import FlowChart from './components/FlowChart';
// import TechRolesCarousel from './components/TechRolesCarousel';
import HowItWorks from './components/HowItWorks';

import FAQSection from './components/FAQSection';
import AboutUs from './components/AboutUs';
import TrakLandingPage from './components/TrakLandingPage';
import MovingBoxes from './components/MovingBoxes';
import HeaderL from './components/HeaderL';


export default function Home() { 
  
 
  return (
   <>
    <HeaderL/>

    <TrakHeroSection />
  
    <MovingBoxes/>
    <HowItWorks/>
   <FAQSection/>
   <AboutUs/>
   <footer>
    <TrakLandingPage/>
   </footer>
   </>
  );
}
