import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <div className='bg-img'>
        <Navbar/>
      <div className="container hero-bg">
        <div className="fade-white"></div>
        <div className="fade-black"></div>
      </div>
    <div className=" container hero-info">
      <div className="row" style={{height:'100%',width:'100%'}}>
        <div className="col-12 col-lg-6 info-1">
          <h1 className="travel-explore">
          Travel & Explore <br /> the World
          </h1>
          <p className='hero-para'>
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className='hero-btn'>
          Book My Tour</button>

        </div>
        <div className="col-12 col-lg-6 emty"></div>

      </div>
    </div>
    </div>
  )
}
