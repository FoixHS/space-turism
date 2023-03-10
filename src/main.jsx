import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '../i18n'

// styles
import './index.css'

// pages
import Oops from './pages/Oops'
import Home from './pages/Home'
import Destination from './pages/Destinations'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Oops />
  },
  {
    path: '/destination',
    element: <Destination />,
    errorElement: <Oops />
  },
  {
    path: '/crew',
    element: <Crew />,
    errorElement: <Oops />
  },
  {
    path: '/technology',
    element: <Technology />,
    errorElement: <Oops />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
