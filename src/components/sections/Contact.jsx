import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      type: 'email',
      icon: '📧',
      label: t('contact.email'),
      value: t('contact.emailValue'),
      link: `mailto:${t('contact.emailValue')}`,
      color: '#EA4335'
    },
    {
      type: 'linkedin',
      icon: '💼',
      label: t('contact.linkedin'),
      value: t('contact.linkedinValue'),
      link: 'https://linkedin.com/in/loic-philippe',
      color: '#0077B5'
    },
    {
      type: 'github',
      icon: '💻',
      label: t('contact.github'),
      value: t('contact.githubValue'),
      link: 'https://github.com/Loic-ally',
      color: '#333333'
    }
  ];

  const handleContactClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-methods">
              <div className="contact-grid">
                {contactItems.map((item, index) => (
                  <div 
                    key={index}
                    className="contact-card"
                    onClick={() => handleContactClick(item.link)}
                    style={{ '--accent-color': item.color }}
                  >
                    <div className="contact-card-header">
                      <span className="contact-icon">{item.icon}</span>
                      <h4>{item.label}</h4>
                    </div>
                    <p className="contact-value">{item.value}</p>
                    <div className="contact-card-overlay">
                      <span className="contact-cta">{t('contact.contactCta')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="location-section">
          <div className="location-card">
            <div className="location-header">
              <span className="location-icon">📍</span>
              <h3>{t('contact.location')}</h3>
            </div>
            <p className="location-value">{t('contact.locationValue')}</p>
          </div>
        </div>
      </div>

      <div className="contact-background">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </section>
  );
};

export default Contact;