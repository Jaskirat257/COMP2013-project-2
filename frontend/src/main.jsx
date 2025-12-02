//Author: Jaskirat
//Description: PROJECT-2

// This file starts our React app
import { StrictMode } from 'react'
// createRoot puts our React app into the HTML page
import { createRoot } from 'react-dom/client'
// Import our main App component
import App from './App.jsx'
// Import global styles (fonts, body, buttons, etc.)
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
