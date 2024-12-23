import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Tech from './components/Tech'
import Works from './components/Works'
import Feedbacks from './components/Feedbacks'
import Contact from './components/Contact'
import Stars from './components/canvas/Stars'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        
        <Tech/>
        <Works/>
        
        <div className='relative z-0'>
          <Contact/>
          <Stars/>
        </div>

      </div>
      </BrowserRouter>
    </div>
  )
}
