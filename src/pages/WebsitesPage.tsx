import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebsitesPage = () => {
    const [selectedWebsite, setSelectedWebsite] = useState<number | null>(null);

    const websites = [
        {
            id: 1,
            title: 'Lumière Menu',
            url: 'https://lumiere-menu.netlify.app/',
            description: 'Elegant fine dining experience with sophisticated menu design and seamless ordering system',
            category: 'Fine Dining',
            avatar: '🍽️',
            clientType: 'Restaurant'
        },
        {
            id: 2,
            title: 'Burger Haven',
            url: 'https://logical-company-043355.framer.app/',
            description: 'Bold and vibrant menu design perfect for casual dining with easy navigation',
            category: 'Fast Casual',
            avatar: '🍔',
            clientType: 'Restaurant'
        },
        {
            id: 3,
            title: 'Qitchen',
            url: 'https://mobile-example-209855.framer.app/',
            description: 'Modern kitchen-focused design with clean aesthetics and mobile-first approach',
            category: 'Modern Kitchen',
            avatar: '👨‍🍳',
            clientType: 'Restaurant'
        },
        {
            id: 4,
            title: 'Plantify',
            url: 'https://radiant-nasturtium-faa72f.netlify.app/',
            description: 'Fresh, organic menu design emphasizing healthy choices and sustainability',
            category: 'Healthy Dining',
            avatar: '🌱',
            clientType: 'Cafe'
        },
        {
            id: 5,
            title: 'Late Cafe',
            url: 'https://persistent-listening-918372.framer.app/',
            description: 'Cozy coffee shop atmosphere with warm design and perfect for late-night visits',
            category: 'Coffee Shop',
            avatar: '☕',
            clientType: 'Cafe'
        },
    ];

    const selectedSite = websites.find(site => site.id === selectedWebsite);

    if (selectedWebsite && selectedSite) {
        return (
            <div className="min-h-screen bg-white">
                <Header />

                {/* Navigation Bar for Website View */}
                <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-14">
                            <button
                                onClick={() => setSelectedWebsite(null)}
                                className="flex items-center text-forest-600 hover:text-forest-700 transition-colors duration-300"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Our Work
                            </button>

                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">{selectedSite.title}</span>
                                <a
                                    href={selectedSite.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-forest-600 hover:text-forest-700 transition-colors duration-300"
                                >
                                    <ExternalLink className="w-4 h-4 mr-1" />
                                    Open in New Tab
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Website Display */}
                <div className="pt-30">
                    <div className="pt-30 h-[calc(100vh-56px)]" style={{ width: '100%', height: 'calc(100vh - 56px)', border: 'none' }}>
                        <iframe
                            src={selectedSite.url}
                            title={selectedSite.title}
                            className="w-full h-full border-0"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                        />
                    </div>

                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Header />

            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-sage-50">
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-forest-700 mb-6">
                        Our Digital Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Explore our portfolio of digital solutions designed to transform businesses and enhance customer experiences.
                    </p>
                </motion.div>
            </section>

            {/* Websites Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Real Projects, Real Results
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            See how we've helped restaurants and cafes like yours increase customer satisfaction and streamline operations with custom digital menu solutions.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-forest-50 border border-forest-200 rounded-lg">
                            <span className="text-sm text-forest-700 font-medium">
                                For the best experience, click this icon
                            </span>
                            <ExternalLink className="w-4 h-4 text-forest-600 mx-2" />
                            <span className="text-sm text-forest-700 font-medium">
                                to view the live website
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websites.map((site, index) => (
                            <motion.div
                                key={site.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedWebsite(site.id)}
                            >
                                <div className="h-48 bg-gradient-to-br from-forest-50 to-sage-50 relative overflow-hidden flex flex-col justify-center items-center">
                                    <div className="text-6xl mb-2 transform hover:scale-110 transition-transform duration-300">
                                        {site.avatar}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-forest-600 text-white text-xs font-medium rounded-full shadow-md">
                                            {site.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-2 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded-full shadow-sm">
                                            {site.clientType}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-forest-700 transition-colors duration-300">
                                            {site.title}
                                        </h3>
                                        <div className="flex items-center text-green-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                            <span className="text-xs font-medium">Live</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {site.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <button className="text-forest-600 hover:text-forest-700 font-medium transition-colors duration-300 text-sm">
                                        </button>
                                        <div className="flex items-center">
                                            <a
                                                href={site.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-forest-600 transition-colors duration-300"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Home Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Let us create a digital solution that perfectly fits your needs.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-3 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
};

export default WebsitesPage;
