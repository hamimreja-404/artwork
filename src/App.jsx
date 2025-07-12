import { useState } from 'react'


import './App.css'
import Hero from './Components/Hero'
import Category from './Components/Category'
import CustomSketch from './Components/Custom'
import OurArtists from './Components/OurArtists'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, // 👈 This allows repeated animations on scroll
    mirror: true,  });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Category/>
      <CustomSketch/>
      <OurArtists/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
