import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-forest-400 mb-4">Quick Menu</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming restaurant experiences with beautiful, mobile-friendly digital menus. 
                One-time setup, lifetime support, no subscriptions ever.
              </p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="mailto:hello@quickmenu.com" 
                className="flex items-center text-gray-300 hover:text-forest-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-3" />
                hello@quickmenu.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-gray-300 hover:text-forest-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-3" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Digital Menu Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">QR Code Generation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Menu Hosting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Brand Customization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">24/7 Support</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#samples" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">Refund Policy</a></li>
            </ul>
            
            <div>
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/1234567890" className="text-gray-300 hover:text-forest-400 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Quick Menu. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for restaurant owners</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Support Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;