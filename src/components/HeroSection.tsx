import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-warm-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={fadeInUp}
            >
              Your Menu.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-sage-500">
                Reimagined
              </span>{' '}
              for the Digital World.
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              We turn your printed menu into a custom digital menu and give you a scannable QR code. 
              Just one-time setup — no subscriptions ever.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-forest-600 text-white font-semibold rounded-lg shadow-lg hover:bg-forest-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Your Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#samples"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-forest-600 font-semibold rounded-lg border-2 border-forest-600 hover:bg-forest-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                See Live Demo
              </a>
            </motion.div>

            {/* Guarantee Badge */}
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-3 bg-sage-50 border border-sage-200 rounded-full shadow-sm"
              variants={fadeInUp}
            >
              <Shield className="w-5 h-5 text-sage-600 mr-2" />
              <div className="text-left sm:text-center">
                <div className="font-semibold text-sage-800 text-sm sm:text-base">100% Satisfaction Guarantee</div>
                <div className="text-xs sm:text-sm text-sage-600">Unlimited edits until you're fully happy — no extra charge</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Phone Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* QR Code with Ripple Effect */}
              <motion.div 
                className="absolute -top-16 sm:-top-20 -left-16 sm:-left-20 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-lg shadow-xl p-3 sm:p-4 z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                  <div className="grid grid-cols-6 sm:grid-cols-8 gap-0.5 sm:gap-1">
                    {[...Array(36)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-0.5 sm:w-1 h-0.5 sm:h-1 ${Math.random() > 0.3 ? 'bg-white' : 'bg-gray-900'}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-forest-400 rounded-lg"
                  animate={{
                    scale: [1, 1.2, 1.4],
                    opacity: [0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Phone Mockup */}
              <div className="relative bg-gray-900 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Phone Screen */}
                  <div className="h-72 sm:h-96 bg-gradient-to-br from-warm-50 to-white p-3 sm:p-4">
                    <div className="bg-white rounded-lg shadow-md h-full p-3 sm:p-4">
                      {/* Menu Header */}
                      <div className="text-center mb-3 sm:mb-4">
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900">Bella Vista Café</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Authentic Italian Cuisine</p>
                      </div>
                      
                      {/* Menu Items Animation */}
                      <motion.div 
                        className="space-y-2 sm:space-y-3"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {[
                          { name: 'Margherita Pizza', price: '$18' },
                          { name: 'Pasta Carbonara', price: '$16' },
                          { name: 'Caesar Salad', price: '$12' }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100">
                            <div>
                              <div className="font-medium text-gray-900 text-xs sm:text-sm">{item.name}</div>
                              <div className="text-xs text-gray-500 hidden sm:block">Fresh ingredients...</div>
                            </div>
                            <div className="font-semibold text-forest-600 text-xs sm:text-sm">{item.price}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 bg-sage-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="hidden sm:inline">Mobile Friendly ✨</span>
                <span className="sm:hidden">Mobile ✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;