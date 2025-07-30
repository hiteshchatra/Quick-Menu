import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultMessage = "Hi! I'm interested in creating a digital menu for my restaurant. Can you help me get started?";

  const handleSendMessage = () => {
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Menu Support</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                    Typically replies instantly
                  </div>
                </div>
              </div>
            </div>

            {/* Message Preview */}
            <div className="p-4 border-b border-gray-200">
              <div className="bg-sage-50 rounded-lg p-3 mb-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  👋 Hi there! Ready to transform your menu?
                </p>
              </div>
              <div className="bg-warm-100 rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-600">
                  Send us a message and we'll help you get started with your digital menu today!
                </p>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={defaultMessage}
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm shadow-sm focus:shadow-md transition-all duration-300"
                rows={3}
              />
              
              <button
                onClick={handleSendMessage}
                className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 mr-2" />
                Start WhatsApp Chat
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Powered by WhatsApp • We reply within minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;