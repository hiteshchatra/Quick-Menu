import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';
import { schemaGenerators, quickMenuFAQs } from '../utils/schemaGenerators';

// Sample blog post data (in a real app, this would come from a CMS or API)
const blogPostsData = {
  'how-qr-menus-work': {
    slug: 'how-qr-menus-work',
    title: 'How QR Menus Work: A Complete Guide for Restaurant Owners',
    description: 'Learn everything about QR code menus - how they work, benefits for restaurants, and why customers love them.',
    content: `
      <p>QR code menus have revolutionized the restaurant industry, offering a contactless, efficient, and modern dining experience. In this comprehensive guide, we'll explore everything you need to know about QR menus and how they can transform your restaurant.</p>

      <h2>What Are QR Menus?</h2>
      <p>QR (Quick Response) menus are digital versions of traditional paper menus that customers can access by scanning a QR code with their smartphone camera. When scanned, the code directs customers to a mobile-optimized website displaying your restaurant's menu.</p>

      <h2>How Do QR Menus Work?</h2>
      <p>The process is simple and user-friendly:</p>
      <ol>
        <li><strong>Customer arrives:</strong> They sit at a table with a QR code displayed on a table tent, sticker, or card</li>
        <li><strong>Scan the code:</strong> Using their smartphone camera or QR scanner app</li>
        <li><strong>View the menu:</strong> The digital menu opens instantly in their web browser</li>
        <li><strong>Browse and order:</strong> Customers can view items, prices, and descriptions, then place orders directly or call a server</li>
      </ol>

      <h2>Benefits for Restaurants</h2>
      <p>QR menus offer numerous advantages for restaurant owners:</p>
      <ul>
        <li><strong>Cost Savings:</strong> Eliminate printing costs and reduce waste</li>
        <li><strong>Easy Updates:</strong> Change prices, add items, or update descriptions instantly</li>
        <li><strong>Hygiene:</strong> Reduce contact points and improve cleanliness</li>
        <li><strong>Analytics:</strong> Track which items are viewed most frequently</li>
        <li><strong>Multilingual Support:</strong> Offer menus in multiple languages</li>
      </ul>

      <h2>Customer Experience Benefits</h2>
      <p>Customers love QR menus because they provide:</p>
      <ul>
        <li>High-quality images of food items</li>
        <li>Detailed descriptions and ingredients</li>
        <li>Easy-to-read text that can be zoomed</li>
        <li>Quick access without waiting for a server</li>
        <li>Contactless and safe dining experience</li>
      </ul>

      <h2>Implementation Best Practices</h2>
      <p>To ensure success with QR menus, follow these best practices:</p>
      <ul>
        <li><strong>Clear Instructions:</strong> Provide simple instructions for first-time users</li>
        <li><strong>Backup Options:</strong> Always have physical menus available for customers who prefer them</li>
        <li><strong>Staff Training:</strong> Ensure your team can help customers with QR menu access</li>
        <li><strong>Mobile Optimization:</strong> Ensure your digital menu works perfectly on all devices</li>
        <li><strong>Fast Loading:</strong> Optimize for quick loading times</li>
      </ul>

      <h2>Getting Started with QR Menus</h2>
      <p>Ready to implement QR menus in your restaurant? Here's how to get started:</p>
      <ol>
        <li>Choose a reliable QR menu provider like Quick Menu</li>
        <li>Digitize your existing menu with professional design</li>
        <li>Generate QR codes for each table or area</li>
        <li>Print and display QR codes prominently</li>
        <li>Train your staff on the new system</li>
        <li>Monitor customer feedback and make improvements</li>
      </ol>

      <h2>Conclusion</h2>
      <p>QR menus represent the future of restaurant dining, offering benefits for both businesses and customers. By implementing a well-designed QR menu system, you can reduce costs, improve efficiency, and enhance the overall dining experience.</p>

      <p>Ready to transform your restaurant with QR menus? <a href="#contact">Contact Quick Menu today</a> to get started with your custom digital menu solution.</p>
    `,
    author: 'Quick Menu Team',
    publishedDate: '2024-01-15',
    modifiedDate: '2024-01-15',
    readingTime: 5,
    category: 'Technology',
    tags: ['QR Menu', 'Restaurant Technology', 'Digital Menu'],
    featuredImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    keywords: 'QR menu how it works, QR code menu guide, digital menu technology, restaurant QR menu implementation'
  }
  // Add more blog posts here
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-forest-600 text-white font-medium rounded-lg hover:bg-forest-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}`, current: true }
  ];

  const postSEO = {
    title: `${post.title} | Quick Menu Blog`,
    description: post.description,
    keywords: post.keywords,
    canonical: `https://quickmenus.com/blog/${post.slug}`,
    ogType: 'article',
    ogImage: post.featuredImage,
    author: post.author,
    publishedTime: post.publishedDate,
    modifiedTime: post.modifiedDate,
    articleSection: post.category,
    readingTime: post.readingTime,
    structuredData: schemaGenerators.article({
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      author: post.author,
      publishedDate: post.publishedDate,
      modifiedDate: post.modifiedDate,
      tags: post.tags,
      category: post.category,
      readingTime: post.readingTime,
      featuredImage: post.featuredImage,
      keywords: post.keywords
    })
  };

  const additionalSchemas = [
    schemaGenerators.breadcrumbList([
      { name: "Blog", url: "https://quickmenus.com/blog" },
      { name: post.title, url: `https://quickmenus.com/blog/${post.slug}` }
    ]),
    schemaGenerators.faqPage(quickMenuFAQs.slice(0, 4)) // Include relevant FAQs
  ];

  return (
    <>
      <SEOHead config={postSEO} additionalSchemas={additionalSchemas} />
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-forest-100 text-forest-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <button className="flex items-center text-forest-600 hover:text-forest-700 transition-colors duration-200">
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>Share</span>
                  </button>
                </div>

                <div className="mb-8">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </header>

            {/* Article Content */}
            <motion.div
              className="prose prose-lg max-w-none mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div
              className="mb-12 pb-8 border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-forest-600 hover:text-forest-700 font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>
            </motion.div>
          </article>

          {/* FAQ Section */}
          <FAQ 
            faqs={quickMenuFAQs.slice(0, 4)}
            title="Related Questions"
            subtitle="Common questions about QR menus and digital dining solutions"
            className="bg-gray-50"
          />

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-forest-600 to-forest-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Create Your QR Menu?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Transform your restaurant with a professional digital menu solution.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-forest-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;