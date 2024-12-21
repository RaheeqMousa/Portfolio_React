import React from 'react'
import Navbar from './assets/Component/Navbar/Navbar'; 
import Footer from './assets/Component/footer/Footer'; 
import ContactMe from './assets/Component/contactMe/ContactMe';
import AboutUs from './assets/Component/About/AboutUs';
import Portfolio from './assets/Component/portfolio/Portfolio';
import Profile from './assets/Component/profile/Profile';
import NotFound from './assets/Component/NotFound/NotFound';
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" elements={<NotFound />} />
      </Routes>

      <Footer />
    </div>   
  )
}
