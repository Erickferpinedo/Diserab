'use Client'
import React from 'react'
import Animation from './componentes/Animation';
import Navbar from './componentes/Navbar';
import HomePage from './componentes/homePage';
import AboutUs from './componentes/AboutUs' ;
import Footer from './componentes/Footer';
import Services from './componentes/Services';

const page = () => {
  return (
    <main>
     
      <Navbar />
      <Animation />
     <HomePage />
      <AboutUs />
      <Services />
      <Footer />
    </main>
  )
}

export default page
