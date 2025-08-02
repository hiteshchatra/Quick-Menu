import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { schemaGenerators } from '../utils/schemaGenerators';

// Sample blog posts data
const blogPosts = [
  {
    slug: 'how-qr-menus-work',
    title: 'How QR Menus Work: A Complete Guide for Restaurant Owners',
    description: 'Learn everything about QR code menus - how they work, benefits for restaurants, and why customers love them.',
    excerpt: 'QR menus are revolutionizing the restaurant industry. Discover how this contactless technology can transform your dining experience and boost customer satisfaction.',
    author: 'Quick Menu Team',
    publishedDate: '2024-01-15',
    readingTime: 5,
    category: 'Technology',
    tags: ['QR Menu', 'Restaurant Technology', 'Digital Menu'],
    featuredImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
    keywords: 'QR menu how it works, QR code menu guide, digital menu technology'
  },
  {
    slug: 'benefits-digital-menus-restaurants',
    title: '10 Benefits of Digital Menus for Restaurants in 2024',
    description: 'Discover the top advantages of switching from paper to digital menus, including cost savings, better customer experience, and increased sales.',
    excerpt: 'From reducing printing costs to improving customer engagement, digital menus offer numerous benefits for modern restaurants.',
    author: 'Sarah Johnson',
    publishedDate: '2024-01-12',
    readingTime: 7,
    category: 'Business',
    tags: ['Digital Menu', 'Restaurant Business', 'Cost Savings'],
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    keywords: 'digital menu benefits, restaurant digital transformation, QR menu advantages'
  },
  {
    slug: 'qr-menu-design-best-practices',
    title: 'QR Menu Design Best Practices: Creating Menus That Convert',
    description: 'Learn the essential design principles for creating effective QR menus that enhance user experience and drive sales.',
    excerpt: 'Great QR menu design goes beyond just digitizing your paper menu. Learn the best practices that make customers want to order more.',
    author: 'Design Team',
    publishedDate: '2024-01-10',
    readingTime: 6,
    category: 'Design',
    tags: ['Menu Design', 'UX Design', 'QR Menu'],
    featuredImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    keywords: 'QR menu design, digital menu UX, restaurant menu design best practices'
  },
  {
    slug: 'contactless-dining-future-restaurants',
    title: 'Contactless Dining: The Future of Restaurant Experience',
    description: 'Explore how contactless dining solutions like QR menus are shaping the future of the restaurant industry.',
    excerpt: 'The pandemic accelerated the adoption of contactless dining. Learn why this trend is here to stay and how to implement it successfully.',
    author: 'Industry Expert',
    publishedDate: '2024-01-08',
    readingTime: 8,
    category: 'Industry Trends',
    tags: ['Contactless Dining', 'Restaurant Trends', 'Future Technology'],
    featuredImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
    keywords: 'contactless dining, restaurant future, QR menu trends'
  }
];

const categories = ['All', 'Technology', 'Business', 'Design', 'Industry Trends'];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const blogSEO = {
    title: "QR Menu Blog - Restaurant Technology Tips & Guides | Quick Menu",
    description: "Stay updated with the latest trends in QR menus, digital restaurant technology, and contactless dining solutions. Expert tips and guides for restaurant owners.",
    keywords: "QR menu blog, restaurant technology blog, digital menu guides, contactless dining tips",
    canonical: "https://quickmenus.com/blog",
    structuredData: schemaGenerators.breadcrumbList([
      { name: "Blog", url: "https://quickmenus.com/blog" }
    ])
  };

  const breadcrumbItems = [
    { name: "Blog", url: "/blog", current: true }
  ];

  return (
    <>
      <SEOHead config={blogSEO} />
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-forest-50 to-sage-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-forest-700 mb-6">
                  QR Menu Blog
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay updated with the latest trends in QR menus, restaurant technology, 
                  and digital dining solutions. Expert insights and practical guides for modern restaurants.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-forest-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-forest-600 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <time dateTime={post.publishedDate}>
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-forest-600 transition-colors duration-200"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-forest-600 hover:text-forest-700 font-medium text-sm transition-colors duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No posts found in this category.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-gradient-to-br from-forest-600 to-forest-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with QR Menu Trends
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Get the latest insights on restaurant technology and digital dining solutions.
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-forest-600"
                    />
                    <button className="px-6 py-3 bg-white text-forest-600 font-semibold rounded-r-lg hover:bg-gray-50 transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;