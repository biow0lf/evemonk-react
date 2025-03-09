import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EvemonkApp from "./EvemonkApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EvemonkApp />
  </StrictMode>,
)
