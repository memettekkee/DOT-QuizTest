import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './SignUpSignIn'
import SignUpSignIn from './SignUpSignIn'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpSignIn />
  </StrictMode>,
)
