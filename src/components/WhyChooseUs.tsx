import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Palette, Headphones, QrCode, Check, X, AlertTriangle } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'One-time fee only — no subscriptions',
      description: 'Pay once, own forever. No monthly fees or hidden costs.',
      color: 'bg-sage-100 text-sage-600'
    },
    {
      icon: Palette,
      title: 'Premium, brand-matched design',
      description: 'Custom designs that perfectly match your restaurant\'s style and brand.',
      color: 'bg-forest-100 text-forest-600'
    },
    {
      icon: Headphones,
      title: 'Lifetime 24/7 support',
      description: 'Get help whenever you need it, for as long as you need it.',
      color: 'bg-warm-100 text-warm-600'
    },
    {
      icon: QrCode,
      title: 'Printable & shareable QR code',
      description: 'High-quality QR codes that work perfectly on any surface or screen.',
      color: 'bg-sage-100 text-sage-700'
    }
  ];

  const comparisonData = [
    { feature: 'Custom Design', diy: false, freelancers: true, us: true },
    { feature: 'One-Time Payment', diy: false, freelancers: false, us: true },
    { feature: 'Hosting Included', diy: false, freelancers: false, us: true },
    { feature: '24/7 Support', diy: false, freelancers: 'limited', us: true },
    { feature: 'Menu Update Support', diy: false, freelancers: false, us: true },
    { feature: 'Mobile Optimization', diy: false, freelancers: true, us: true },
    { feature: 'Brand Matching', diy: false, freelancers: 'sometimes', us: true }
  ];

  const renderComparisonIcon = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500" />;
    if (value === false) return <X className="w-5 h-5 text-red-500" />;
    return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another service provider. We're your partners in creating the perfect digital menu experience.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-warm-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-gradient-to-br from-warm-50 to-white rounded-2xl shadow-xl overflow-hidden overflow-x-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              How We Compare
            </h3>
            <p className="text-gray-600 text-center mt-2">
              See why businesses choose us over DIY tools and freelancers
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-6 font-semibold text-gray-900 text-xs sm:text-base">DIY QR Tools</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-6 font-semibold text-gray-900 text-xs sm:text-base">Freelancers</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-6 font-semibold text-forest-600 bg-forest-50 text-xs sm:text-base">Our Service</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-900 text-sm sm:text-base">{row.feature}</td>
                    <td className="py-3 sm:py-4 px-2 sm:px-6 text-center">{renderComparisonIcon(row.diy)}</td>
                    <td className="py-3 sm:py-4 px-2 sm:px-6 text-center">{renderComparisonIcon(row.freelancers)}</td>
                    <td className="py-3 sm:py-4 px-2 sm:px-6 text-center bg-forest-50">{renderComparisonIcon(row.us)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;