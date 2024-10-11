import React from 'react'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Change from './Component/Change'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Change' element={<Change/>}></Route>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}
