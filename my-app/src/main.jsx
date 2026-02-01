import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/images.css'
import './styles/colors.css'
import './index.css'
import App from './App.jsx'
import { initSparkles } from './effects/sparkles'

// Inicializar o efeito de sparkles
initSparkles()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
