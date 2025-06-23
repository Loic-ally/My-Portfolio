import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaGamepad, 
  FaGit, 
  FaGithub,
  FaDocker, 
  FaApple, 
  FaLinux,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { SiCsharp, SiPython, SiUnity, SiUnrealengine, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: <FaCode />,
      skills: [
        { name: 'C', icon: <FaCode /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: <FaServer />,
      skills: [
        { name: 'Unity', icon: <SiUnity /> },
        { name: 'Unreal Engine', icon: <SiUnrealengine /> },
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'macOS', icon: <FaApple /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="skills-subtitle">
            {t('skills.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              variants={categoryVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    variants={skillVariants}
                    custom={skillIndex}
                  >
                    <div className="skill-info">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
