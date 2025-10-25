import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUp from './Components/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <SignUp />

  </StrictMode>
)
