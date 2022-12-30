import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// styles
import './index.css'

// pages
import Oops from './pages/Oops'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Oops />
  },
  {
    path: '/destination',
    element: <Home />,
    errorElement: <Oops />
  },
  {
    path: '/crew',
    element: <Home />,
    errorElement: <Oops />
  },
  {
    path: '/technology',
    element: <Home />,
    errorElement: <Oops />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
