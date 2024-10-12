import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apps from './Apps'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>,
)
