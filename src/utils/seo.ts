// SEO utility functions and configurations

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  hreflang?: Array<{lang: string, url: string}>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  readingTime?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  tags: string[];
  category: string;
  readingTime: number;
  featuredImage?: string;
  keywords: string;
}

export interface CaseStudy {
  id: string;
  businessName: string;
  businessType: string;
  location: string;
  menuUrl: string;
  beforeImage?: string;
  afterImage?: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    rating: number;
  };
  implementation: {
    timeline: string;
    features: string[];
    challenges: string[];
  };
}

export const defaultSEO: SEOConfig = {
  title: "Quick Menu - Create QR Code Menu | Digital Menu Website for Restaurants",
  description: "Convert your paper menu into a beautiful online menu page. Share it with customers using a QR code. Easy, fast, and custom-designed. One-time payment, no subscriptions.",
  keywords: "QR menu, online menu, digital menu, QR code restaurant, paper menu website, restaurant digital menu, QR menu generator for restaurants",
  canonical: "https://quickmenus.com/",
  ogImage: "https://quickmenus.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "Quick Menu - Create QR Code Menu | Digital Menu Website for Restaurants",
    description: "Convert your paper menu into a beautiful online menu page. Share it with customers using a QR code. Easy, fast, and custom-designed. One-time payment, no subscriptions.",
    keywords: "QR menu, online menu, digital menu, QR code restaurant, paper menu website, restaurant digital menu, QR menu generator for restaurants, digital restaurant menu with QR, no subscription QR menu, create digital menu for cafe",
    canonical: "https://quickmenus.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Quick Menu - Digital QR Menu Service",
      "description": "Convert your paper menu into a beautiful online menu page with QR code",
      "url": "https://quickmenus.com/",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Quick Menu",
        "description": "Professional QR code menu creation service for restaurants, cafes, and bars"
      }
    }
  },
  caseStudy: {
    title: "Case Studies - Quick Menu Success Stories | QR Menu Examples",
    description: "See how restaurants, cafes, and bars transformed their business with Quick Menu's digital QR code menus. Real success stories and results.",
    keywords: "QR menu case studies, restaurant digital menu examples, QR code menu success stories, digital menu results, restaurant technology case studies",
    canonical: "https://quickmenus.com/case-study",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Quick Menu Case Studies",
      "description": "Success stories of restaurants using Quick Menu's digital QR code menu service",
      "url": "https://quickmenus.com/case-study"
    }
  },
  websites: {
    title: "Portfolio - QR Menu Examples | Quick Menu Website Gallery",
    description: "Browse our portfolio of beautiful digital menus created for restaurants, cafes, and bars. See QR menu examples and get inspired for your business.",
    keywords: "QR menu portfolio, digital menu examples, restaurant menu designs, QR code menu gallery, menu website examples, digital menu showcase",
    canonical: "https://quickmenus.com/websites",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Quick Menu Portfolio",
      "description": "Gallery of digital QR menus created by Quick Menu for restaurants and cafes",
      "url": "https://quickmenus.com/websites"
    }
  }
};

// Function to update document head with SEO data
export const updateSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update meta keywords
  if (config.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords);
    }
  }
  
  // Update canonical URL
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && config.canonical) {
    ogUrl.setAttribute('content', config.canonical);
  }
  
  // Update Twitter Card tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', config.title);
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', config.description);
  }
  
  // Add structured data if provided
  if (config.structuredData) {
    // Remove existing structured data for this page
    const existingScript = document.querySelector('script[data-page-schema]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-schema', 'true');
    script.textContent = JSON.stringify(config.structuredData);
    document.head.appendChild(script);
  }
};

// Keywords for different sections
export const sectionKeywords = {
  hero: "QR menu creator, digital restaurant menu, QR code menu generator",
  pricing: "QR menu pricing, digital menu cost, restaurant menu website price",
  features: "QR menu features, digital menu benefits, contactless menu advantages",
  testimonials: "QR menu reviews, digital menu testimonials, restaurant technology feedback",
  contact: "QR menu contact, digital menu service inquiry, restaurant menu consultation"
};

// Common structured data schemas
export const commonSchemas = {
  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),
  
  faq: (faqs: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),
  
  product: (name: string, description: string, price: string) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Quick Menu"
      }
    }
  })
};