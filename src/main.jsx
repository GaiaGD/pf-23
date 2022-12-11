import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from "./Context"
import ScrollToTop from './utils.jsx/ScrollToTop'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>
)
