import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import { useTheme } from './context/ThemeContext'
import './styles/App.css'

function App() {
  const { theme } = useTheme()
  const location = useLocation()

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
