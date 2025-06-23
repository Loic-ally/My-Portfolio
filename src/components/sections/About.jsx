import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AVATAR_URL } from '../../assets/placeholder';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          data-aos="fade-up"
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="about-intro">
              <p className="about-description">
                {t('about.description')}
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">🎓</span>
                  <span>{t('about.details.education')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💻</span>
                  <span>{t('about.details.development')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🎮</span>
                  <span>{t('about.details.gaming')}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image-container"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="about-image">
              <img 
                src={AVATAR_URL}
                alt="Loïc Philippe" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=EL';
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
