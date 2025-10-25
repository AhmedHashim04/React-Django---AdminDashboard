import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css';
import SignUp from './Components/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp />
  </StrictMode>
)
