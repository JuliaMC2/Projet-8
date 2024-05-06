import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './PageHome.jsx'
import Fiche from './PageFiche.jsx'
import Error_404 from './PageError-404.jsx'
import About from './PageAbout.jsx'

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
