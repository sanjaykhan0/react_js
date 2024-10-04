import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  let data = 'mfgikdejfgioej'
  let location = useLocation()

  return (
      <div>
          <h1>home</h1>
          
       
          
          <Link to={'/About'}>about</Link>
          <Link to={"/Contact"}>contact</Link>
      </div>
  )
}
