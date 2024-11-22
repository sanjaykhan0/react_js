import { useState } from 'react'

import './App.css'
import Signin from './Components/Signin'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
