import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Create from './Component/Create'
import Update from './Component/Update'
import Delete from './Component/Delete'

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
    },
  ]);
  return (
    <BrowserRouter>
    <Routes>

<Route path="/" element={<Home data={data}/>} ></Route>
<Route path="/Create" element={<Create data={data} setData={setData}/>} ></Route>
<Route path="/Update" element={<Update data={data} setData={setData}/>} ></Route>
<Route path="/Delete" element={<Delete data={data} setData={setData}/>} ></Route>


    </Routes>
    </BrowserRouter>

    
  )
}
