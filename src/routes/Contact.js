import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRef } from 'react';
import HeroImg3 from '../components/HeroImg3'
import Form from '../components/Form'

const Contact = () => {
  
 
  return (
    <div>
      <Navbar />
      
      <HeroImg3 heading="CONTACT ME" text="Let's get in touch" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact