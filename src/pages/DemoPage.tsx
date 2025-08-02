import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, ArrowRight, Star, Clock, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { schemaGenerators } from '../utils/schemaGenerators';

// Demo restaurant data
const demoRestaurant = {
  name: "Bella Vista Café",
  type: "Italian Café",
  location: "Downtown Delhi",
  description: "Authentic Italian cuisine with a modern twist",
  logo: "🍝",
  qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lumiere-menu.netlify.app/",
  menuUrl: "https://lumiere-menu.netlify.app/",
  features: [
    "Mobile-optimized design",
    "High-quality food images",
    "Detailed ingredient lists",
    "Multiple language support",
    "Real-time updates",
    "Contactless ordering"
  ],
  stats: [
    { label: "Customer Satisfaction", value: "98%", icon: Star },
    { label: "Average Order Time", value: "3 min", icon: Clock },
    { label: "Daily QR Scans", value: "250+", icon: Users }
  ]
};

const DemoPage: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const demoSEO = {
    title: "QR Menu Demo - See How Digital Menus Work | Quick Menu",
    description: "Experience our QR menu technology firsthand. See how customers interact with digital menus and discover the benefits for your restaurant.",
    keywords: "QR menu demo, digital menu example, restaurant QR code demo, contactless menu preview",
    canonical: "https://quickmenus.com/demo",
    structuredData: schemaGenerators.service({
      name: "QR Menu Demo",
      description: "Interactive demonstration of QR code menu technology",
      provider: "Quick Menu",
      areaServed: "India",
      serviceType: "Digital Menu Demonstration"
    })
  };

  const breadcrumbItems = [
    { name: "Demo", url: "/demo", current: true }
  ];

  const additionalSchemas = [
    schemaGenerators.breadcrumbList([
      { name: "Demo", url: "https://quickmenus.com/demo" }
    ]),
    schemaGenerators.videoObject({
      name: "QR Menu Demo Video",
      description: "See how QR menus work in real restaurants",
      thumbnailUrl: "https://quickmenus.com/demo-thumbnail.jpg",
      uploadDate: "2024-01-15",
      duration: "PT2M30S"
    })
  ];

  return (
    <>
      <SEOHead config={demoSEO} additionalSchemas={additionalSchemas} />
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-forest-50 to-sage-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-forest-700 mb-6">
                  Experience QR Menus in Action
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  See how our QR menu technology works with this live demo. 
                  Scan the code below or click to explore a real digital menu.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Smartphone className="w-4 h-4" />
                  <span>Works on any smartphone - no app required</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* QR Code Demo */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                    <div className="mb-6">
                      <div className="text-6xl mb-4">{demoRestaurant.logo}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {demoRestaurant.name}
                      </h3>
                      <p className="text-gray-600 mb-1">{demoRestaurant.type}</p>
                      <p className="text-sm text-gray-500">{demoRestaurant.location}</p>
                    </div>

                    <div className="mb-6">
                      <img
                        src={demoRestaurant.qrCodeUrl}
                        alt="QR Code for demo menu"
                        className="mx-auto w-48 h-48 border-2 border-gray-200 rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Scan with your phone camera or click below
                      </p>
                      <a
                        href={demoRestaurant.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-colors duration-300 shadow-lg"
                      >
                        <QrCode className="w-5 h-5 mr-2" />
                        View Demo Menu
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Features & Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What You'll Experience
                  </h2>
                  <p className="text-gray-600 mb-8">
                    This demo showcases all the features your customers will enjoy 
                    when you implement QR menus in your restaurant.
                  </p>

                  <div className="space-y-4 mb-8">
                    {demoRestaurant.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-forest-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowContactModal(true)}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white font-semibold rounded-lg hover:from-forest-700 hover:to-forest-800 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                  >
                    Create Your QR Menu
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Real Results from QR Menus
                </h2>
                <p className="text-lg text-gray-600">
                  See the impact QR menus have on restaurant operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {demoRestaurant.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mb-4">
                      <stat.icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How QR Menus Work
                </h2>
                <p className="text-lg text-gray-600">
                  Simple steps for both restaurants and customers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Customer Sits",
                    description: "Customer arrives and sits at a table with a QR code"
                  },
                  {
                    step: "2", 
                    title: "Scan Code",
                    description: "They scan the QR code with their smartphone camera"
                  },
                  {
                    step: "3",
                    title: "Browse Menu",
                    description: "Digital menu opens instantly in their web browser"
                  },
                  {
                    step: "4",
                    title: "Order & Enjoy",
                    description: "Customer views items and places order with staff"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-600 text-white font-bold rounded-full mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-forest-600 to-forest-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Create Your Own QR Menu?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Join hundreds of restaurants already using QR menus to enhance their customer experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="px-8 py-4 bg-white text-forest-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                  >
                    Get Started Now
                  </button>
                  <a
                    href="/case-study"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-forest-600 transition-colors duration-200"
                  >
                    View Case Studies
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get Your QR Menu
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your restaurant with a professional QR menu? 
                Contact us to get started.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
                <a
                  href="/#contact"
                  className="flex-1 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors duration-200 text-center"
                  onClick={() => setShowContactModal(false)}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default DemoPage;