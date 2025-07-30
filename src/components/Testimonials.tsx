import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      business: 'The Garden Bistro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'Quick Menu transformed our entire dining experience. Our customers love how easy it is to browse our menu, and we\'ve saved thousands in printing costs. The team was professional, fast, and delivered exactly what they promised.'
    },
    {
      name: 'James Chen',
      business: 'Urban Coffee Co.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'The best investment we made for our café. The digital menu looks incredible and our customers can easily see all our specialty drinks. Setup was seamless and the support team is amazing.'
    },
    {
      name: 'Sarah Thompson',
      business: 'Sunset Bar & Grill',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'We went from outdated paper menus to a sleek digital experience in just 3 days. Our staff loves how easy it is to update items, and customers appreciate the clean, modern look.'
    },
    {
      name: 'David Kim',
      business: 'Bella Vista Italian',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'Outstanding service and results. The menu perfectly captures our restaurant\'s elegant atmosphere. Customer feedback has been overwhelmingly positive since we made the switch.'
    },
    {
      name: 'Lisa Park',
      business: 'Green Leaf Café',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'The team at Quick Menu understood our vision perfectly. They created a beautiful, eco-friendly digital menu that aligns with our sustainable values. Couldn\'t be happier!'
    },
    {
      name: 'Michael Torres',
      business: 'Downtown Diner',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      text: 'From start to finish, the experience was fantastic. Our retro diner now has a modern digital menu that still feels true to our brand. Highly recommended!'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied restaurant owners who've transformed their dining experience with Quick Menu.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-forest-50 border border-forest-200 rounded-full shadow-sm">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-teal-800 font-medium">
              Trusted by cafes, bars, and restaurants worldwide
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-forest-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support Available' },
            { number: '3 Days', label: 'Average Setup Time' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-forest-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;