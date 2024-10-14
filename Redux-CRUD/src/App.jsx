import React from 'react'
import Home from './component/Home'
import { Provider } from 'react-redux'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider>
      <Home store={store} />
      </Provider>

      
    </div>
  )
}
