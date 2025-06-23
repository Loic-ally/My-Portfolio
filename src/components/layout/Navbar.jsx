import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle language between English and French
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('portfolio-language', newLang);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">
        <img src="/icon.svg" alt="Logo Loïc PHILIPPE" style={{ height: '40px' }} />
      </div>

      <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('nav.home')}
        </a>
        <a 
          href="#about" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('nav.about')}
        </a>
        <a 
          href="#skills" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('nav.skills')}
        </a>
        <a 
          href="#projects" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('nav.projects')}
        </a>
        <a 
          href="#contact" 
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('nav.contact')}
        </a>
      </div>

      <div className="nav-controls">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        
        <button 
          className="lang-toggle" 
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </button>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
