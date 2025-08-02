import { CaseStudy } from '../utils/seo';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'garden-bistro',
    businessName: 'The Garden Bistro',
    businessType: 'Family Restaurant',
    location: 'Downtown Portland',
    menuUrl: 'https://lumiere-menu.netlify.app/',
    beforeImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      {
        metric: 'Printing Cost Reduction',
        value: '80%',
        description: 'Saving $640+ monthly on menu printing and updates'
      },
      {
        metric: 'Customer Engagement',
        value: '45%',
        description: 'More time spent viewing menu items and descriptions'
      },
      {
        metric: 'Customer Satisfaction',
        value: '92%',
        description: 'Customers love the easy-to-read digital format'
      }
    ],
    testimonial: {
      text: 'Quick Menu transformed our entire dining experience. Our customers love how easy it is to browse our menu, and we\'ve saved thousands in printing costs. The team was professional, fast, and delivered exactly what they promised.',
      author: 'Maria Rodriguez',
      position: 'Owner, The Garden Bistro',
      rating: 5
    },
    implementation: {
      timeline: '3 days from concept to launch',
      features: [
        'Custom design matching rustic, cozy aesthetic',
        'High-quality food photography integration',
        'Easy-to-scan QR codes for every table',
        'Admin panel for real-time menu updates',
        'Mobile-first responsive design',
        'Fast loading times and offline capability'
      ],
      challenges: [
        'Printing costs of $800+ monthly for menu updates',
        'Customer complaints about hard-to-read text',
        'Inability to quickly update prices or availability',
        'Limited space for detailed dish descriptions',
        'Concerns about hygiene during the pandemic'
      ]
    }
  },
  {
    id: 'urban-coffee',
    businessName: 'Urban Coffee House',
    businessType: 'Coffee Shop',
    location: 'Mumbai, India',
    menuUrl: 'https://persistent-listening-918372.framer.app/',
    beforeImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      {
        metric: 'Order Processing Speed',
        value: '60%',
        description: 'Faster order taking and reduced wait times'
      },
      {
        metric: 'Daily QR Scans',
        value: '300+',
        description: 'High adoption rate among tech-savvy customers'
      },
      {
        metric: 'Staff Efficiency',
        value: '40%',
        description: 'More time for customer service and quality'
      }
    ],
    testimonial: {
      text: 'The QR menu has been a game-changer for our busy coffee shop. Customers can browse our extensive coffee menu and seasonal specials without waiting for a server. Our staff can focus on making great coffee instead of explaining menu items.',
      author: 'Arjun Patel',
      position: 'Manager, Urban Coffee House',
      rating: 5
    },
    implementation: {
      timeline: '2 days for design and deployment',
      features: [
        'Coffee-focused design with warm colors',
        'Seasonal menu sections',
        'Detailed brewing method descriptions',
        'Nutritional information display',
        'Multi-language support (English/Hindi)',
        'Integration with loyalty program'
      ],
      challenges: [
        'Complex coffee menu with multiple variations',
        'Frequent seasonal menu changes',
        'Need for detailed brewing information',
        'High customer turnover requiring quick access',
        'Limited table space for traditional menus'
      ]
    }
  },
  {
    id: 'spice-route',
    businessName: 'Spice Route Restaurant',
    businessType: 'Fine Dining Indian',
    location: 'Delhi, India',
    menuUrl: 'https://radiant-nasturtium-faa72f.netlify.app/',
    beforeImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      {
        metric: 'Average Order Value',
        value: '25%',
        description: 'Increased through better menu presentation'
      },
      {
        metric: 'Customer Dwell Time',
        value: '20%',
        description: 'Longer stays due to engaging digital experience'
      },
      {
        metric: 'International Customers',
        value: '90%',
        description: 'Better experience with multilingual menus'
      }
    ],
    testimonial: {
      text: 'Our fine dining experience needed a sophisticated digital presence. Quick Menu delivered a beautiful, elegant QR menu that matches our restaurant\'s premium ambiance. The multilingual support has been especially valuable for our international guests.',
      author: 'Chef Vikram Singh',
      position: 'Head Chef & Owner',
      rating: 5
    },
    implementation: {
      timeline: '5 days for premium design and testing',
      features: [
        'Elegant design with gold accents',
        'Professional food photography',
        'Detailed ingredient and allergen information',
        'Wine pairing suggestions',
        'Chef\'s recommendations section',
        'Multi-language support (English/Hindi/French)'
      ],
      challenges: [
        'Complex traditional Indian menu structure',
        'Need for detailed spice level indicators',
        'Allergen information requirements',
        'Premium brand image maintenance',
        'International customer communication'
      ]
    }
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudiesData.find(study => study.id === id);
};

export const getFeaturedCaseStudies = (limit: number = 3): CaseStudy[] => {
  return caseStudiesData.slice(0, limit);
};