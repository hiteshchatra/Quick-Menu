import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      business: 'The Garden Bistro',
      avatar: 'https://ui-avatars.com/api/?name=Maria+Rodriguez&size=128&background=f59e0b&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'Quick Menu transformed our entire dining experience. Our customers love how easy it is to browse our menu, and we\'ve saved thousands in printing costs. The team was professional, fast, and delivered exactly what they promised.'
    },
    {
      name: 'James Chen',
      business: 'Urban Coffee Co.',
      avatar: 'https://ui-avatars.com/api/?name=James+Chen&size=128&background=3b82f6&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'The best investment we made for our café. The digital menu looks incredible and our customers can easily see all our specialty drinks. Setup was seamless and the support team is amazing.'
    },
    {
      name: 'Sarah Thompson',
      business: 'Sunset Bar & Grill',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Thompson&size=128&background=ec4899&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'We went from outdated paper menus to a sleek digital experience in just 3 days. Our staff loves how easy it is to update items, and customers appreciate the clean, modern look.'
    },
    {
      name: 'David Kim',
      business: 'Bella Vista Italian',
      avatar: 'https://ui-avatars.com/api/?name=David+Kim&size=128&background=10b981&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'Outstanding service and results. The menu perfectly captures our restaurant\'s elegant atmosphere. Customer feedback has been overwhelmingly positive since we made the switch.'
    },
    {
      name: 'Lisa Park',
      business: 'Green Leaf Café',
      avatar: 'https://ui-avatars.com/api/?name=Lisa+Park&size=128&background=8b5cf6&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'The team at Quick Menu understood our vision perfectly. They created a beautiful, eco-friendly digital menu that aligns with our sustainable values. Couldn\'t be happier!'
    },
    {
      name: 'Michael Torres',
      business: 'Downtown Diner',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Torres&size=128&background=ef4444&color=fff&bold=true&format=svg',
      rating: 5,
      text: 'From start to finish, the experience was fantastic. Our retro diner now has a modern digital menu that still feels true to our brand. Highly recommended!'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      color: 'text-forest-600'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Satisfaction Rate',
      color: 'text-yellow-600'
    },
    {
      icon: TrendingUp,
      number: '24/7',
      label: 'Support Available',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      number: '3 Days',
      label: 'Average Setup Time',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 via-white to-sage-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied restaurant owners who've transformed their dining experience with Quick Menu.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-forest-50 to-sage-50 border border-forest-200 rounded-full shadow-sm">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-forest-800 font-medium">
              Trusted by cafes, bars, and restaurants worldwide
            </span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{testimonial.business}</div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-forest-200 absolute -top-3 -left-3 opacity-50" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-forest-600 to-sage-600 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Proven Results That Speak for Themselves
            </h3>
            <p className="text-forest-100 text-lg max-w-2xl mx-auto">
              Our track record of success is built on delivering exceptional digital menu experiences
              that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-forest-100 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;