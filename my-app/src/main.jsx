import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/images.css'
import './styles/colors.css'
import './index.css'
import App from './App.jsx'
import { initSparkles } from './effects/sparkles'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundSreen from './screens/notFoundScreen/NotFoundScreen.jsx'
import AboutScreen from './screens/aboutScreen/AboutScreen.jsx'
import GalleryScreen from './screens/galleryScreen/GalleryScreen.jsx'
import PinterestScreen from './screens/pinterestScreen/PinterestScreen.jsx'
import SewingScreen from './screens/sewingScreen/SewingScreen.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/home", element: <App />},
  {path: "/about", element: <AboutScreen />},
  {path: "/gallery", element: <GalleryScreen />},
  {path: "/pinterest", element: <PinterestScreen />},
  {path: "/sewing", element: <SewingScreen />},
  {path: "*", element: <NotFoundSreen />},
]);

// Inicializar o efeito de sparkles
initSparkles()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
