import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-forest-600">Quick Menu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/#how-it-works" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">How It Works</Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Pricing</Link>
            <Link to="/websites" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Our Work</Link>
            <Link to="/#samples" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Samples</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center px-4 py-2 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-4">
              <Link to="/#how-it-works" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">How It Works</Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Pricing</Link>
              <Link to="/websites" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Our Work</Link>
              <Link to="/#samples" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Samples</Link>
              <Link to="/#contact" className="text-gray-700 hover:text-forest-600 transition-colors duration-300">Contact</Link>
              <a
                href="tel:+1234567890"
                className="flex items-center px-4 py-2 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-all duration-300 shadow-md hover:shadow-lg w-fit"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;