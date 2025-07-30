import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SampleShowcase = () => {
  const beforeAfterSamples = [
    {
      before: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'The Garden Bistro',
      description: 'From cluttered paper menu to clean digital experience'
    },
    {
      before: 'https://images.pexels.com/photos/3298364/pexels-photo-3298364.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Sunset Café',
      description: 'Transformed vintage menu into modern mobile experience'
    },
    {
      before: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Urban Bar & Grill',
      description: 'From basic text menu to engaging visual showcase'
    }
  ];

  return (
    <section className="py-20 bg-white" id="samples">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from our clients. See how we turn ordinary menus into extraordinary digital experiences.
          </p>
        </motion.div>

        {/* Before/After Gallery */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {beforeAfterSamples.map((sample, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-warm-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sample.title}</h3>
                <p className="text-gray-600 mb-4">{sample.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-red-600 mb-2">Before</div>
                    <img 
                      src={sample.before} 
                      alt="Before transformation"
                      className="w-full h-32 object-cover rounded-lg border-2 border-red-200"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-600 mb-2">After</div>
                    <img 
                      src={sample.after} 
                      alt="After transformation"
                      className="w-full h-32 object-cover rounded-lg border-2 border-green-200"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Menu on Device */}
        <motion.div 
          className="bg-gradient-to-br from-forest-50 to-sage-50 rounded-2xl p-8 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Menu Preview</h3>
              <p className="text-gray-600 mb-6">
                Experience how your customers will interact with your digital menu. 
                Clean, fast, and beautifully designed for any device.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Mobile Optimized</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Fast Loading</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Easy Navigation</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Menu on phone"
                    className="w-full h-80 object-cover shadow-inner"
                  />
                </div>
              </div>
              
              {/* QR Code on Table */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-lg shadow-xl p-2"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-0.5">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 h-1 ${Math.random() > 0.3 ? 'bg-white' : 'bg-gray-900'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Case Study CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Link 
            to="/case-study"
            className="inline-flex items-center px-8 py-4 bg-forest-600 text-white font-semibold rounded-lg shadow-lg hover:bg-forest-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View Full Case Study
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleShowcase;