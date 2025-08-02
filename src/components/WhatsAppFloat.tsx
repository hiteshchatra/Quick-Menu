import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultMessage = "Hi! I'm interested in creating a digital menu for my restaurant. Can you help me get started?";

  const handleSendMessage = () => {
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/918815654577?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDirectWhatsApp = () => {
    const whatsappUrl = `https://wa.me/918815654577?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 right-0 p-6" style={{ zIndex: 10000 }}>
      {/* Floating Button */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 2, 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <motion.button
          onClick={handleButtonClick}
          className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer relative overflow-hidden"
          style={{ 
            border: 'none',
            outline: 'none',
            zIndex: 10001
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { 
              rotate: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          {/* Background Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ 
              scale: [0, 1.2, 0],
              opacity: [0.3, 0.1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ 
                  rotate: 0, 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -2, 0]
                }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut",
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Pulse Ring Animation */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full pointer-events-none"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ zIndex: 10000 }}
            />
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full pointer-events-none"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              style={{ zIndex: 9999 }}
            />
          </>
        )}

        {/* Floating Particles */}
        {!isOpen && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-300 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  x: [0, Math.cos(i * 120 * Math.PI / 180) * 30],
                  y: [0, Math.sin(i * 120 * Math.PI / 180) * 30],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Tooltip */}
        {!isOpen && (
          <motion.div 
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            style={{ zIndex: 10000 }}
            initial={{ 
              opacity: 0, 
              y: 20, 
              scale: 0.9,
              rotateX: -15
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              y: 20, 
              scale: 0.9,
              rotateX: -15
            }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            {/* Header */}
            <motion.div 
              className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Quick Menu Support</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <motion.div 
                      className="w-2 h-2 bg-green-300 rounded-full mr-2"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    Online now
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Preview */}
            <motion.div 
              className="p-4 border-b border-gray-200"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.div 
                className="bg-gray-50 rounded-lg p-3 mb-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-700">
                  👋 Hi there! Ready to transform your menu?
                </p>
              </motion.div>
              <motion.div 
                className="bg-green-50 rounded-lg p-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-600">
                  Send us a message and we'll help you get started with your digital menu today!
                </p>
              </motion.div>
            </motion.div>

            {/* Message Input */}
            <motion.div 
              className="p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={defaultMessage}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all duration-200"
                rows={3}
              />
              
              <motion.button
                onClick={handleSendMessage}
                className="w-full mt-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                </motion.div>
                Send Message
              </motion.button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                We typically reply within minutes
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFloat;