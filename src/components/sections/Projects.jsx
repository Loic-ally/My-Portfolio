import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGamepad, FaRobot, FaDownload, FaShieldAlt } from 'react-icons/fa';
import { PROJECT_IMAGES } from '../../assets/placeholder';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.projectData.gamedev.title'),
      description: t('projects.projectData.gamedev.description'),
      image: PROJECT_IMAGES.project1,
      tech: ['Unity', 'C#', 'Horror Game', 'Git LFS', '3D Graphics'],
      github: 'https://github.com/ChapkaBoy/Epitech-Game-Jam',
      demo: null,
      category: t('projects.categories.gamedev'),
      icon: <FaGamepad />
    },
    {
      id: 2,
      title: t('projects.projectData.secureshot.title'),
      description: t('projects.projectData.secureshot.description'),
      image: PROJECT_IMAGES.project2,
      tech: ['React', 'TailwindCSS', 'Node.js', 'Express', 'Supabase', 'PayPal API'],
      github: 'https://github.com/Loic-ally/SecureShot',
      demo: null,
      category: t('projects.categories.web'),
      icon: <FaShieldAlt />
    },
    {
      id: 3,
      title: t('projects.projectData.pokoban.title'),
      description: t('projects.projectData.pokoban.description'),
      image: PROJECT_IMAGES.project3,
      tech: ['SFML', 'C'],
      github: 'https://github.com/Loic-ally/sokoban',
      demo: null,
      category: t('projects.categories.upcoming'),
      icon: <FaCode />
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="projects-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-category">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> {t('projects.viewCode')}
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-demo"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.id === 1 ? <FaDownload /> : <FaExternalLinkAlt />} {project.id === 1 ? t('projects.releases') : t('projects.liveDemo')}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
