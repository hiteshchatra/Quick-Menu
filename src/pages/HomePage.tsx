import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingSection from '../components/PricingSection';
import SampleShowcase from '../components/SampleShowcase';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import ContactSection from '../components/ContactSection';
import QRGallery from '../components/QRGallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { pageSEO } from '../utils/seo';
import { quickMenuFAQs, schemaGenerators } from '../utils/schemaGenerators';

const HomePage = () => {
  // Enhanced SEO with FAQ schema
  const homePageSEO = {
    ...pageSEO.home,
    structuredData: schemaGenerators.generatePageSchemas([
      pageSEO.home.structuredData,
      schemaGenerators.faqPage(quickMenuFAQs),
      schemaGenerators.organization()
    ])
  };

  return (
    <>
      <SEOHead config={homePageSEO} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Semantic HTML structure for better SEO */}
        <Header />
        
        <main role="main">
          {/* Hero Section - Primary content */}
          <section aria-label="Hero section">
            <HeroSection />
          </section>
          
          {/* What We Do Section */}
          <section aria-label="Our services">
            <WhatWeDo />
          </section>
          
          {/* How It Works Section */}
          <section aria-label="How our service works">
            <HowItWorks />
          </section>
          
          {/* Why Choose Us Section */}
          <section aria-label="Why choose our service">
            <WhyChooseUs />
          </section>
          
          {/* Pricing Section */}
          <section aria-label="Pricing plans" id="pricing">
            <PricingSection />
          </section>
          
          {/* Sample Showcase Section */}
          <section aria-label="Portfolio showcase">
            <SampleShowcase />
          </section>
          
          {/* Testimonials Section */}
          <section aria-label="Customer testimonials">
            <Testimonials />
          </section>
          
          {/* FAQ Section */}
          <section aria-label="Frequently asked questions">
            <FAQ 
              faqs={quickMenuFAQs}
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about our QR menu service"
              className="bg-gray-50"
            />
          </section>
          
          {/* About Us Section */}
          <section aria-label="About our company">
            <AboutUs />
          </section>
          
          {/* QR Gallery Section */}
          <section aria-label="QR code examples">
            <QRGallery />
          </section>
          
          {/* Contact Section */}
          <section aria-label="Contact information" id="contact">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;