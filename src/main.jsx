import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Layout from './components/layout/layout.jsx'
import ErrorPage from './components/pages/errorPage.jsx'
import './index.css'
import ProjectsPage from './components/pages/ProjectsPage.jsx'

// Define the router configuration
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    { path: '/projects', element: <ProjectsPage /> },
    {
      path: '*',
      element: <ErrorPage />
    }
  ],
  {
    basename: '/'
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
)
