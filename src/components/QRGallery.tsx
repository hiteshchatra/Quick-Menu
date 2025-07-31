import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, MapPin, Zap, Shield, Clock } from 'lucide-react';

const QRGallery = () => {
  const benefits = [
    {
      icon: QrCode,
      title: 'Table Displays',
      description: 'Place QR codes on tables for instant menu access and contactless ordering.',
      color: 'from-forest-400 to-forest-600'
    },
    {
      icon: Smartphone,
      title: 'Entry Points',
      description: 'Welcome guests with QR codes at entrances for quick information and offers.',
      color: 'from-sage-400 to-sage-600'
    },
    {
      icon: MapPin,
      title: 'Takeaway Packaging',
      description: 'Add QR codes to packaging so customers can revisit your menu anytime.',
      color: 'from-warm-400 to-warm-600'
    },
    {
      icon: Zap,
      title: 'Windows & Walls',
      description: 'Showcase QR codes on windows or walls for easy scanning and engagement.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Receipts & Flyers',
      description: 'Include QR codes on receipts or flyers for promotions and feedback.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Outdoor Areas',
      description: 'Make your menu accessible 24/7 with QR codes in outdoor seating zones.',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 via-white to-forest-50" id="qr-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            Where to Apply QR Codes?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            QR codes can be placed anywhere your customers interact with your business. From tables and entrances to packaging and outdoor spaces, discover the best spots to maximize convenience and engagement.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-forest-100 to-sage-100 border border-forest-200 rounded-full shadow-sm">
            <QrCode className="w-5 h-5 text-forest-600 mr-2" />
            <span className="text-forest-800 font-medium">
              Scan-tested in real environments
            </span>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-sage-100 bg-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-forest-700 mb-2">{benefit.title}</h3>
              <p className="text-sage-700 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QRGallery;