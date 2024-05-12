import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import Fiche from './pages/Fiche.jsx'
import Error_404 from './pages/Error-404.jsx'
import About from './pages/About.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/logement/:logementId",
    element: <Fiche />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error_404 />
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
