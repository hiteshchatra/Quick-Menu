import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Coffee } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We obsess over every detail to create beautiful, functional menus'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'You work directly with our designers, not automated systems'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '500+ successful menu transformations and counting'
    },
    {
      icon: Coffee,
      title: 'Industry Focus',
      description: 'We understand restaurant operations and customer needs'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
              About Quick Menu
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're a small team of designers and developers who love transforming boring menus
              into beautiful online experiences. Founded in 2022, we've helped hundreds of restaurants,
              cafes, and bars modernize their dining experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is simple: make digital menus accessible, affordable, and beautiful for
              every food business, regardless of size or budget. We believe great design shouldn't
              be a luxury—it should be standard.
            </p>

            {/* Team Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-forest-100 to-sage-100 rounded-2xl p-8 text-center shadow-lg">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Users className="w-8 h-8 text-forest-600" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Heart className="w-8 h-8 text-sage-500" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Award className="w-8 h-8 text-warm-600" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium">
                  Meet our passionate team of menu transformation experts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why We Do What We Do</h3>

              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-warm-50 transition-all duration-300 hover:shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <value.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="text-center p-4 bg-gradient-to-br from-forest-50 to-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-forest-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Menus Created</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-sage-50 to-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-sage-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;