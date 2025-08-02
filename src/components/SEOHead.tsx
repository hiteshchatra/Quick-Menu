import React, { useEffect } from 'react';
import { updateSEO, SEOConfig, defaultSEO } from '../utils/seo';

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
  additionalSchemas?: any[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ config = {}, additionalSchemas = [] }) => {
  useEffect(() => {
    const seoConfig: SEOConfig = {
      ...defaultSEO,
      ...config
    };
    
    updateSEO(seoConfig);
    
    // Add hreflang tags if provided
    if (config.hreflang) {
      // Remove existing hreflang tags
      const existingHreflang = document.querySelectorAll('link[hreflang]');
      existingHreflang.forEach(tag => tag.remove());
      
      // Add new hreflang tags
      config.hreflang.forEach(({ lang, url }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = url;
        document.head.appendChild(link);
      });
    }
    
    // Add additional schemas if provided
    if (additionalSchemas.length > 0) {
      additionalSchemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-additional-schema', `${index}`);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
    
    // Add article-specific meta tags
    if (config.author) {
      let authorMeta = document.querySelector('meta[name="author"]');
      if (!authorMeta) {
        authorMeta = document.createElement('meta');
        authorMeta.setAttribute('name', 'author');
        document.head.appendChild(authorMeta);
      }
      authorMeta.setAttribute('content', config.author);
    }
    
    if (config.publishedTime) {
      let publishedMeta = document.querySelector('meta[property="article:published_time"]');
      if (!publishedMeta) {
        publishedMeta = document.createElement('meta');
        publishedMeta.setAttribute('property', 'article:published_time');
        document.head.appendChild(publishedMeta);
      }
      publishedMeta.setAttribute('content', config.publishedTime);
    }
    
    if (config.modifiedTime) {
      let modifiedMeta = document.querySelector('meta[property="article:modified_time"]');
      if (!modifiedMeta) {
        modifiedMeta = document.createElement('meta');
        modifiedMeta.setAttribute('property', 'article:modified_time');
        document.head.appendChild(modifiedMeta);
      }
      modifiedMeta.setAttribute('content', config.modifiedTime);
    }
    
    if (config.articleSection) {
      let sectionMeta = document.querySelector('meta[property="article:section"]');
      if (!sectionMeta) {
        sectionMeta = document.createElement('meta');
        sectionMeta.setAttribute('property', 'article:section');
        document.head.appendChild(sectionMeta);
      }
      sectionMeta.setAttribute('content', config.articleSection);
    }
    
    // Cleanup function
    return () => {
      // Remove additional schemas on unmount
      const additionalSchemaElements = document.querySelectorAll('script[data-additional-schema]');
      additionalSchemaElements.forEach(element => element.remove());
    };
  }, [config, additionalSchemas]);

  return null; // This component doesn't render anything
};

export default SEOHead;