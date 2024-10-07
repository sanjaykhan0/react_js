import React from 'react'
// import Navbar from './Componant/Navbar/Navbar'
import Hero from './Componant/Hero/Hero'
import './App.css'
import Section2 from './Componant/section2/Section2'
import Section3 from './Componant/section3/Section3'
import Footer from './Componant/Footer/Footer'
import Section4 from './Componant/section4/Section4'
import Card from './Componant/Hero/card/Card'

export default function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Card/>
      <Footer/>
    </div>
  )
}
