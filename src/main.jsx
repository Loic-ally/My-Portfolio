import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'
import { ThemeProvider } from './context/ThemeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: false,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
