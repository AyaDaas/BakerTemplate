import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/Index'
import { RouterProvider } from 'react-router-dom'
import CardComponent from './component/content/CardComponent.jsx'
import appFirebase from './FirebaseConfig.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
