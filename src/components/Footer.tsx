import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
              {/* <a 
                href="mailto:hello@quickmenu.com" 
                className="flex items-center text-gray-300 hover:text-forest-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-3" />
                hello@quickmenu.com
              </a> */}
              <a 
                href="tel:+91 63510 62703" 
                className="flex items-center text-gray-300 hover:text-forest-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-3" />
                +91 63510 62703
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                Ahmedabad, India
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
              <li>
                <button 
                  onClick={() => handleSectionNavigation('what-we-do')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  Digital Menu Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('how-it-works')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  QR Code Generation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('pricing')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  Menu Hosting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('why-choose-us')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  Brand Customization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('contact')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  24/7 Support
                </button>
              </li>
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
              <li>
                <Link 
                  to="/demo" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Live Demo
                </Link>
              </li>
              <li>
                <Link 
                  to="/websites" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-study" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('about')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('contact')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  to="/blog/how-qr-menus-work" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  How QR Menus Work
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('faq')}
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300 text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            <div>
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/quickmenus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/quickmenus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/918815654577" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-forest-400 transition-colors duration-300"
                  aria-label="Contact us on WhatsApp"
                >
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
            <span>Made with ❤️ for you</span>
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