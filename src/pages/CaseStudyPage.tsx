import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero */}
        <motion.section className="bg-gradient-to-br from-gray-50 to-white py-16" {...fadeInUp}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Case Study: The Garden Bistro
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we transformed a traditional family restaurant's paper menu into a modern digital experience, 
                increasing customer satisfaction and reducing printing costs by 80%.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: '500+', label: 'Daily QR Scans' },
                { icon: TrendingUp, value: '85%', label: 'Customer Satisfaction' },
                { icon: Clock, value: '3 Days', label: 'Setup Time' },
                { icon: Star, value: '4.9/5', label: 'Average Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* The Challenge */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The Garden Bistro, a beloved family restaurant in downtown Portland, was struggling with 
                    outdated paper menus that were expensive to print and difficult to update.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Printing costs of $800+ monthly for menu updates</li>
                    <li>Customer complaints about hard-to-read text</li>
                    <li>Inability to quickly update prices or availability</li>
                    <li>Limited space for detailed dish descriptions</li>
                    <li>Concerns about hygiene during the pandemic</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img 
                    src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Old paper menu" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Before: Paper Menu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Solution */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img 
                    src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Digital menu on phone" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      After: Digital Menu
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We worked closely with The Garden Bistro to create a beautiful, mobile-optimized 
                    digital menu that reflected their warm, family-friendly brand.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Custom design matching their rustic, cozy aesthetic</li>
                    <li>High-quality food photography integration</li>
                    <li>Easy-to-scan QR codes for every table</li>
                    <li>Admin panel for real-time menu updates</li>
                    <li>Mobile-first responsive design</li>
                    <li>Fast loading times and offline capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section 
          className="py-16 bg-gradient-to-br from-teal-50 to-coral-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Results</h2>
              <p className="text-xl text-gray-600">
                Within 30 days of launch, The Garden Bistro saw remarkable improvements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: '80%',
                  description: 'Reduction in printing costs',
                  detail: 'Saving $640+ monthly on menu printing and updates'
                },
                {
                  metric: '45%',
                  description: 'Increase in customer engagement',
                  detail: 'More time spent viewing menu items and descriptions'
                },
                {
                  metric: '92%',
                  description: 'Customer satisfaction rate',
                  detail: 'Customers love the easy-to-read digital format'
                }
              ].map((result, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{result.description}</div>
                  <div className="text-gray-600">{result.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonial */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "Quick Menu transformed our entire dining experience. Our customers love how easy it is to 
                browse our menu, and we've saved thousands in printing costs. The team was professional, 
                fast, and delivered exactly what they promised."
              </blockquote>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                  alt="Maria Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-gray-600">Owner, The Garden Bistro</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          className="py-16 bg-gradient-to-br from-teal-600 to-teal-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Menu?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join hundreds of restaurants who've made the switch to digital menus
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyPage;