import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
    file: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      file: e.target.files ? e.target.files[0] : null
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-700" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Send Your Menu Now
          </h2>
          <p className="text-xl text-forest-100 max-w-3xl mx-auto">
            Ready to transform your menu? Send us your current menu and we'll get started on creating 
            your beautiful digital version within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-300 shadow-sm focus:shadow-md"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-300 shadow-sm focus:shadow-md"
                  placeholder="Your Restaurant Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-300 shadow-sm focus:shadow-md"
                  placeholder="john@restaurant.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-300 shadow-sm focus:shadow-md"
                  placeholder="Tell us about your restaurant and any specific requirements..."
                />
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Your Current Menu
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-forest-500 transition-all duration-300 hover:bg-forest-50"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG, DOC up to 10MB</p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-forest-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-forest-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Menu for Review
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll review your menu and send you a custom quote within 24 hours
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@quickmenu.com"
                  className="flex items-center space-x-4 hover:text-forest-200 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                  <span>hello@quickmenu.com</span>
                </a>
                <a 
                  href="tel:+1234567890"
                  className="flex items-center space-x-4 hover:text-forest-200 transition-colors duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>(123) 456-7890</span>
                </a>
                <a 
                  href="https://wa.me/1234567890"
                  className="flex items-center space-x-4 hover:text-forest-200 transition-colors duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Response Promise</h3>
              <ul className="space-y-2 text-forest-100">
                <li>✓ Initial response within 4 hours</li>
                <li>✓ Custom quote within 24 hours</li>
                <li>✓ Design preview in 3-5 days</li>
                <li>✓ Final delivery within 1 week</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Alternative Ways to Reach Us</h3>
              <p className="text-teal-100 mb-4">
                Prefer a different method? You can also send your menu via:
              </p>
              <ul className="space-y-2 text-forest-100">
                <li>• WhatsApp: Quick and easy sharing</li>
                <li>• Email: Detailed project discussions</li>
                <li>• Phone: Speak directly with our team</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;