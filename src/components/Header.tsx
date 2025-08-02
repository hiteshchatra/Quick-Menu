import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const isOnSubPage = location.pathname !== '/';

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
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => handleSectionNavigation('how-it-works')}
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              How It Works
            </button>
            <button
              onClick={() => handleSectionNavigation('pricing')}
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Pricing
            </button>
            <Link
              to="/websites"
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              to="/case-study"
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Case Studies
            </Link>
            <Link
              to="/demo"
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Works
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Blog
            </Link>
            <button
              onClick={() => handleSectionNavigation('contact')}
              className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+916351062703"
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
              {isOnSubPage && (
                <button
                  onClick={() => {
                    navigate('/');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center text-gray-700 hover:text-forest-600 transition-colors duration-300 pb-2 border-b border-gray-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </button>
              )}
              
              <button
                onClick={() => handleSectionNavigation('how-it-works')}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300 text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => handleSectionNavigation('pricing')}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300 text-left"
              >
                Pricing
              </button>
              <Link
                to="/websites"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/case-study"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
              >
                Case Studies
              </Link>
              <Link
                to="/demo"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
              >
                Works
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300"
              >
                Blog
              </Link>
              <button
                onClick={() => handleSectionNavigation('contact')}
                className="text-gray-700 hover:text-forest-600 transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <a
                href="tel:+916351062703"
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