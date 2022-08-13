import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import './index.css'
import {ThemeProvider} from './theme/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider>
    <Home/>
    </ThemeProvider>
  </React.StrictMode>
)
