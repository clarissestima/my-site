import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/images.css'
import './styles/colors.css'
import './index.css'
import App from './App.jsx'
import { initSparkles } from './effects/sparkles'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from './screens/notFoundScreen/NotFoundPage.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/about", element: <div>About Page</div>},
  {path: "/gallery", element: <div>Gallery Page</div>},
  {path: "/pinterest", element: <div>Pinterest Board Page</div>},
  {path: "/sewing", element: <div>Sewing Page</div>},
  {path: "*", element: <NotFoundPage />},
]);

// Inicializar o efeito de sparkles
initSparkles()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
