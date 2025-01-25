import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom'
import App from './App'
import './styles/index.css'

function PathHandler() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const pathParam = searchParams.get('path')
    
    if (pathParam) {
      // Remove the path parameter from the URL
      window.history.replaceState({}, document.title, '/ecell-website')
      
      // Navigate to the specified path
      navigate(pathParam)
    }
  }, [navigate, location])

  return null
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/ecell-website">
      <PathHandler />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
