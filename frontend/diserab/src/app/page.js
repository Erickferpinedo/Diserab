'use Client'
import React from 'react'
import Navbar from './componentes/Navbar';
import HomePage from './componentes/homePage';
import AboutUs from './componentes/AboutUs' ;
import Footer from './componentes/Footer';
import QuestionnaireForm from './componentes/QuestionnaireForm';
import Services from './componentes/Services';

const page = () => {
  return (
    <main>
     
      <Navbar />
     <HomePage />
     <Services />
      <AboutUs />
<QuestionnaireForm />
      <Footer />
    </main>
  )
}

export default page
