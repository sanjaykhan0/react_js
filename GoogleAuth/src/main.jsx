import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'
=======
import './index.css'
import App from './App.jsx'
>>>>>>> 01c4b81b7c89dd4ff22990000e6e4e15067f3c3f

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
