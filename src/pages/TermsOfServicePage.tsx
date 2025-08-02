import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const TermsOfServicePage: React.FC = () => {
  const termsSEO = {
    title: "Terms of Service - Quick Menu | QR Menu Service",
    description: "Read our terms of service for Quick Menu's QR code menu creation service. Understand your rights and responsibilities.",
    keywords: "terms of service, Quick Menu terms, QR menu service terms, legal agreement",
    canonical: "https://quickmenus.com/terms-of-service"
  };

  const breadcrumbItems = [
    { name: "Terms of Service", url: "/terms-of-service", current: true }
  ];

  return (
    <>
      <SEOHead config={termsSEO} />
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> January 15, 2024
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using Quick Menu's services, you accept and agree to be bound by the 
                    terms and provision of this agreement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    Quick Menu provides digital menu creation services for restaurants, cafes, and bars, 
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Custom digital menu design</li>
                    <li>QR code generation and management</li>
                    <li>Menu hosting and maintenance</li>
                    <li>Customer support and updates</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
                  <p className="text-gray-700 mb-4">
                    Our services are provided on a one-time payment basis with no recurring fees, unless 
                    otherwise specified:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Payment is due upon service completion</li>
                    <li>All prices are in Indian Rupees (INR)</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>Additional services may incur separate charges</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not interfere with our service operations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    You retain ownership of your menu content and business information. Quick Menu retains 
                    ownership of our platform, technology, and design elements.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability</h2>
                  <p className="text-gray-700 mb-4">
                    While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability. 
                    We will provide reasonable notice for planned maintenance.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    Quick Menu's liability is limited to the amount paid for our services. We are not liable 
                    for indirect, incidental, or consequential damages.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                  <p className="text-gray-700 mb-4">
                    Either party may terminate this agreement with reasonable notice. Upon termination, 
                    you retain access to your digital menu for the agreed period.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of 
                    significant changes via email or service notifications.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                  <p className="text-gray-700">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@quickmenus.com<br />
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

export default TermsOfServicePage;