import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Contact from './pages/Contact.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/events",
    element: <Events/>
  },
  {
    path: "/sponsors",
    element: <Sponsors/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
