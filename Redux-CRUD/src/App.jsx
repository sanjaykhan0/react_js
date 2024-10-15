import React from 'react'
import Home from './component/Home'
import { Provider } from 'react-redux'
import { store } from './app/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}
