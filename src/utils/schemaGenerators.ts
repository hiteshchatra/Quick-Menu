// Advanced Schema.org generators for Quick Menu

import { BlogPost, CaseStudy } from './seo';

export const schemaGenerators = {
  // Article schema for blog posts
  article: (post: BlogPost) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.featuredImage || "https://quickmenus.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://quickmenus.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Quick Menu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quickmenus.com/logo.png"
      }
    },
    "datePublished": post.publishedDate,
    "dateModified": post.modifiedDate || post.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://quickmenus.com/blog/${post.slug}`
    },
    "keywords": post.keywords,
    "articleSection": post.category,
    "wordCount": Math.ceil(post.content.length / 5), // Rough word count
    "timeRequired": `PT${post.readingTime}M`,
    "about": {
      "@type": "Thing",
      "name": "QR Menu Technology",
      "description": "Digital menu solutions for restaurants"
    }
  }),

  // Review schema for testimonials and case studies
  review: (review: {
    businessName: string;
    reviewText: string;
    rating: number;
    author: string;
    position: string;
    datePublished: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Quick Menu Digital Menu Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Quick Menu"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": review.author,
      "jobTitle": review.position
    },
    "reviewBody": review.reviewText,
    "datePublished": review.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": review.businessName
    }
  }),

  // FAQ Page schema
  faqPage: (faqs: Array<{question: string, answer: string}>) => ({
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

  // Video Object schema for demo videos
  videoObject: (video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string; // ISO 8601 format (PT1M30S)
    embedUrl?: string;
    contentUrl?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "embedUrl": video.embedUrl,
    "contentUrl": video.contentUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Quick Menu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quickmenus.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "WatchAction",
      "target": video.embedUrl || video.contentUrl
    }
  }),

  // Breadcrumb List schema
  breadcrumbList: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": item.url
      }
    }))
  }),

  // Local Business schema for case studies
  localBusinessCaseStudy: (caseStudy: CaseStudy) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": caseStudy.businessName,
    "description": `${caseStudy.businessType} in ${caseStudy.location} using Quick Menu's digital QR menu service`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": caseStudy.location
    },
    "url": caseStudy.menuUrl,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Menu",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "QR Code Digital Menu",
            "provider": {
              "@type": "Organization",
              "name": "Quick Menu"
            }
          }
        }
      ]
    },
    "review": caseStudy.testimonial ? {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": caseStudy.testimonial.rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": caseStudy.testimonial.author,
        "jobTitle": caseStudy.testimonial.position
      },
      "reviewBody": caseStudy.testimonial.text
    } : undefined
  }),

  // Service schema for specific offerings
  service: (service: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    offers?: Array<{name: string, price?: string, description: string}>;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider
    },
    "serviceType": service.serviceType,
    "areaServed": {
      "@type": "Place",
      "name": service.areaServed
    },
    "hasOfferCatalog": service.offers ? {
      "@type": "OfferCatalog",
      "name": `${service.name} Plans`,
      "itemListElement": service.offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        "price": offer.price,
        "priceCurrency": "INR"
      }))
    } : undefined
  }),

  // Organization schema with enhanced details
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quick Menu",
    "alternateName": "Quick Menu Digital Solutions",
    "url": "https://quickmenus.com",
    "logo": "https://quickmenus.com/logo.png",
    "description": "Professional QR code menu creation service for restaurants, cafes, and bars. Transform your paper menu into a beautiful digital experience.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Quick Menu Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-123-456789",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/quickmenus",
      "https://www.instagram.com/quickmenus",
      "https://twitter.com/quickmenus",
      "https://www.linkedin.com/company/quickmenus"
    ],
    "knowsAbout": [
      "QR Code Technology",
      "Digital Menu Design",
      "Restaurant Technology",
      "Mobile Web Development",
      "User Experience Design"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "QR Menu Creation",
          "description": "Custom digital menu design with QR code integration"
        }
      }
    ]
  }),

  // How-to schema for instructional content
  howTo: (howTo: {
    name: string;
    description: string;
    totalTime: string;
    steps: Array<{name: string, text: string, image?: string}>;
  }) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "totalTime": howTo.totalTime,
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Restaurant Menu"
      },
      {
        "@type": "HowToSupply", 
        "name": "Smartphone or Computer"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Quick Menu Service"
      }
    ],
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  }),

  // Helper function to generate multiple schemas for a page
  generatePageSchemas: (schemas: any[]) => ({
    "@context": "https://schema.org",
    "@graph": schemas
  })
};

// Common FAQ data for Quick Menu
export const quickMenuFAQs = [
  {
    question: "How long does it take to create a QR menu?",
    answer: "Most QR menus are completed within 24-48 hours. Complex menus with custom designs may take up to 3-5 business days."
  },
  {
    question: "Do I need to pay monthly fees for my QR menu?",
    answer: "No! Quick Menu offers a one-time payment model. You pay once and own your digital menu forever with no recurring fees."
  },
  {
    question: "Can customers order directly from the QR menu?",
    answer: "Yes, we can integrate ordering functionality with your existing POS system or third-party delivery platforms like Zomato, Swiggy, or direct WhatsApp ordering."
  },
  {
    question: "Is the QR menu mobile-friendly?",
    answer: "Absolutely! All our QR menus are designed mobile-first to ensure perfect viewing on smartphones and tablets."
  },
  {
    question: "Can I update my menu items and prices?",
    answer: "Yes, you can easily update your menu through our admin panel or by contacting our support team. Updates are reflected instantly."
  },
  {
    question: "What if my customers don't have smartphones?",
    answer: "We provide both QR codes and short URLs. Customers can also ask staff to show the menu on a tablet or printed backup."
  },
  {
    question: "Do you provide the QR code stickers for tables?",
    answer: "Yes! We provide high-quality, waterproof QR code stickers or table tents as part of our service package."
  },
  {
    question: "Can I see examples of QR menus you've created?",
    answer: "Certainly! Visit our portfolio page to see live examples of QR menus we've created for restaurants, cafes, and bars."
  }
];

export default schemaGenerators;