import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic Plan',
      subtitle: 'for Small Restaurants',
      originalPrice: 499,
      price: 399,
      features: [
        'Custom-designed digital menu',
        'Hosted under our domain',
        'Printable QR code',
        'Lifetime support',
        'Manual updates by our team',
        'Mobile-optimized design',
        'Fast loading times'
      ],
      cta: 'Get Basic Plan',
      popular: false
    },
    {
      name: 'Pro Plan',
      subtitle: 'For Growing Businesses',
      originalPrice: 799,
      price: 499,
      features: [
        'Everything in Basic Plan',
        'Admin login to edit your own menu',
        'Real-time changes',
        'Add/edit/delete anytime',
        'Analytics dashboard',
        'Custom domain option',
        'Priority support',
        'Bulk menu updates'
      ],
      cta: 'Get Pro Plan',
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 to-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest-700 mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-forest-600 to-sage-500 bg-clip-text text-transparent">
            Simple One-Time Pricing — No Hidden Costs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Both include lifetime support and unlimited menu updates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${plan.popular ? 'ring-2 ring-forest-500 shadow-xl' : ''
                }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>

                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-forest-600">${plan.price}</span>
                </div>
                <p className="text-gray-600">One-Time Payment</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-sage-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-colors ${plan.popular
                    ? 'bg-forest-600 text-white hover:bg-forest-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300'
                    : 'bg-warm-100 text-gray-900 hover:bg-warm-200 shadow-md hover:shadow-lg transition-all duration-300'
                  }`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-sage-50 border border-sage-200 rounded-full shadow-sm">
            <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center mr-3">
              <Check className="w-5 h-5 text-sage-600" />
            </div>
            <span className="text-green-800 font-medium">
              30-day money-back guarantee if you're not completely satisfied
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;