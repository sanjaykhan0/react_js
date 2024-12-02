import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'

import Mens from './Components/Mens'
import Pagination from './Components/Pagination'
import Electronics from './Components/Electronics'
import Women from './Components/Women'
import Jewelery from './Components/Jewelery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Pagination />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Womens" element={<Women />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Jewelery" element={<Jewelery />} />

          </Routes>
        </Router>
      </Provider >
      {/* <Pagination/> */}
    </>
  )
}

export default App
