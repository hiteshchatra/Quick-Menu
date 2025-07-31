import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Eye, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SampleShowcase = () => {
  const featuredProjects = [
    {
      title: 'The Garden Bistro',
      category: 'Fine Dining',
      description: 'Elegant digital menu with seasonal highlights and wine pairings',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { satisfaction: '98%', orderTime: '-40%' }
    },
    {
      title: 'Urban Coffee Co.',
      category: 'Café',
      description: 'Modern coffee menu with customization options and loyalty integration',
      image: 'https://images.pexels.com/photos/3298364/pexels-photo-3298364.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { satisfaction: '95%', orderTime: '-35%' }
    },
    {
      title: 'Sunset Bar & Grill',
      category: 'Casual Dining',
      description: 'Interactive menu with food photography and allergen information',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { satisfaction: '97%', orderTime: '-45%' }
    }
  ];

  const highlights = [
    {
      icon: Eye,
      title: 'Visual Excellence',
      description: 'Beautiful, mobile-first designs that showcase your food perfectly'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with instant loading and smooth navigation'
    },
    {
      icon: Star,
      title: 'Customer Loved',
      description: 'Consistently high satisfaction rates across all our implementations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-sage-50" id="samples">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            See Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed dining experiences for restaurants just like yours.
            Each project is crafted with precision and designed for success.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <highlight.icon className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects Preview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-forest-600">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">{project.stats.satisfaction}</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">{project.stats.orderTime}</div>
                    <div className="text-xs text-gray-500">Order Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-white via-forest-50/30 to-sage-50/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-forest-600/30 border border-forest-100/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-forest-400/20 to-sage-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-sage-400/20 to-forest-400/20 rounded-full blur-xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-forest-700 via-forest-600 to-sage-600 bg-clip-text text-transparent mb-6">
              Ready to See More?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our complete portfolio including detailed case studies, before & after comparisons,
              and client testimonials that showcase the <span className="text-forest-600 font-semibold">real impact</span> of our work.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/websites"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white font-bold rounded-xl shadow-lg shadow-forest-600/30 hover:shadow-xl hover:shadow-forest-600/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="mr-3">View Full Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/case-study"
                className="group inline-flex items-center px-8 py-4 bg-white text-forest-600 font-bold rounded-xl border-2 border-forest-600 shadow-lg shadow-forest-600/20 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sage-50 hover:shadow-xl hover:shadow-forest-600/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="mr-3">Read Case Study</span>
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleShowcase;