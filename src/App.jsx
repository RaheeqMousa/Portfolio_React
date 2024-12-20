import React from 'react'
import Navbar from './assets/Component/Navbar/Navbar'; 
import Footer from './assets/Component/footer/Footer'; 
import ContactMe from './assets/Component/contactMe/ContactMe';
import AboutUs from './assets/Component/About/AboutUs';
import Portfolio from './assets/Component/portfolio/Portfolio';
import Profile from './assets/Component/profile/Profile';


export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Portfolio />
      <AboutUs />
      <ContactMe />
      <Footer />
    </div>   
  )
}
