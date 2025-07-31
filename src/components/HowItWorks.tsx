import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Globe, QrCode } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'You send your current menu',
      description: 'Upload your existing menu via our simple form or WhatsApp',
      color: 'bg-sage-100 text-sage-600'
    },
    {
      icon: Palette,
      title: 'We redesign it beautifully',
      description: 'Our designers create a stunning, mobile-friendly digital version',
      color: 'bg-forest-100 text-forest-600'
    },
    {
      icon: Globe,
      title: 'We host it + give you a QR code',
      description: 'Your menu goes live with a custom QR code for easy access',
      color: 'bg-warm-100 text-warm-600'
    },
    {
      icon: QrCode,
      title: 'You place it and go live!',
      description: 'Print the QR codes and place them on tables - you\'re ready!',
      color: 'bg-sage-100 text-sage-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 to-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your digital menu live in just 4 simple steps. The entire process takes 3-5 business days.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-200 via-forest-200 via-warm-200 to-sage-300 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-forest-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </div>

                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;