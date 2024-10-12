import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignUpSignIn from './sign/SignUpSignIn'
import App from './app'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SignUpSignIn /> */}
    <App/>
  </StrictMode>,
)
