import React from 'react';
import { motion } from 'framer-motion';
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
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroSection />
      <WhatWeDo />
      <HowItWorks />
      <WhyChooseUs />
      <PricingSection />
      <SampleShowcase />
      <Testimonials />
      <AboutUs />
      <QRGallery />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;