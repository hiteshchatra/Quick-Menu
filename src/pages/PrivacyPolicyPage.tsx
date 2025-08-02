import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicyPage: React.FC = () => {
  const privacySEO = {
    title: "Privacy Policy - Quick Menu | QR Menu Service",
    description: "Learn how Quick Menu protects your privacy and handles your data. Our commitment to transparency and data security.",
    keywords: "privacy policy, data protection, Quick Menu privacy, QR menu privacy",
    canonical: "https://quickmenus.com/privacy-policy"
  };

  const breadcrumbItems = [
    { name: "Privacy Policy", url: "/privacy-policy", current: true }
  ];

  return (
    <>
      <SEOHead config={privacySEO} />
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> January 15, 2024
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    request our services, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Business information (restaurant name, address, menu details)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide and maintain our QR menu services</li>
                    <li>Process payments and send transaction confirmations</li>
                    <li>Communicate with you about our services</li>
                    <li>Improve our services and develop new features</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except as described in this policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@quickmenus.com<br />
                      <strong>Phone:</strong> +91-123-456789<br />
                      <strong>Address:</strong> Delhi, India
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;