import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Welcome from './components/Welcome/Welcome.jsx'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Welcome />
    <App />
    <Footer />
  </React.StrictMode>,
)
