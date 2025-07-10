import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-intro" variants={itemVariants}>
          <span className="hero-greeting-small">{t('hero.greeting')}</span>
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          {t('hero.name')}
        </motion.h1>
        
        <motion.div className="hero-roles" variants={itemVariants}>
          <span className="hero-role-prefix">{t('hero.rolePrefix')}</span>
          <span className="hero-typewriter">
            <Typewriter
              options={{
                strings: t('hero.roles', { returnObjects: true }),
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
                pauseFor: 2000
              }}
            />
          </span>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          {t('hero.description')}
        </motion.p>
        
        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#about" className="btn hero-btn-primary">
            {t('hero.ctaPrimary')}
          </a>
          <a href="#projects" className="btn btn-outline hero-btn-secondary">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <a href="https://github.com/Loic-ally" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/loic-philippe/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:loic.philippe@epitech.eu" className="social-link">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>{t('hero.scrollText')}</span>
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
