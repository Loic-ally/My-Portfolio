import { useEffect } from 'react';

// Update document title based on the current page
export const useDocumentTitle = (title) => {
  useEffect(() => {
    const defaultTitle = 'Loïc Philippe | Portfolio';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  }, [title]);
};

// Update meta tags for SEO
export const updateMetaTags = (metadata = {}) => {
  const defaults = {
    description: 'Loïc Philippe - Student at Epitech Mulhouse. Programming, Game Dev, DevOps enthusiast.',
    keywords: 'Loïc Philippe, Portfolio, Developer, Game Development, C, Python, C#, Unity, Unreal Engine',
    'og:title': 'Loïc Philippe | Portfolio',
    'og:description': 'Loïc Philippe - Student at Epitech Mulhouse. Programming, Game Dev, DevOps enthusiast.',
    'og:type': 'website',
    'og:url': window.location.href,
  };

  const tags = { ...defaults, ...metadata };

  // Update meta tags
  Object.keys(tags).forEach(key => {
    const tag = document.querySelector(`meta[name="${key}"]`) || 
                document.querySelector(`meta[property="${key}"]`);
    
    if (tag) {
      if (key.startsWith('og:')) {
        tag.setAttribute('property', key);
      } else {
        tag.setAttribute('name', key);
      }
      tag.setAttribute('content', tags[key]);
    } else {
      const newTag = document.createElement('meta');
      
      if (key.startsWith('og:')) {
        newTag.setAttribute('property', key);
      } else {
        newTag.setAttribute('name', key);
      }
      
      newTag.setAttribute('content', tags[key]);
      document.head.appendChild(newTag);
    }
  });
};
