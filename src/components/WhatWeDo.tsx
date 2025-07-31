import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Settings, Globe, Shield } from 'lucide-react';

const WhatWeDo = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    {
      icon: Palette,
      title: 'Done-For-You Service',
      description: 'We design and update your digital menu',
      features: [
        'Custom design matching your brand',
        'Professional food photography optimization',
        'Mobile-first responsive layout',
        'Fast loading times',
        'SEO optimized for local search'
      ]
    },
    {
      icon: Settings,
      title: 'Admin Panel Access',
      description: 'You manage it yourself anytime',
      features: [
        'Easy-to-use dashboard',
        'Real-time menu updates',
        'Add/edit/delete items instantly',
        'Price management',
        'Availability toggles'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the service that fits your needs. Both options include our premium design and lifetime support.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
            <Globe className="w-5 h-5 text-forest-600 mr-2" />
            <span className="text-forest-800 font-medium">Trusted by restaurants, cafes, and bars worldwide</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-warm-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <service.icon className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Shield className="w-4 h-4 text-sage-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;