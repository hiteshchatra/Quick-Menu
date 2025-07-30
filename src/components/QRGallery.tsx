import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, MapPin } from 'lucide-react';

const QRGallery = () => {
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'QR Code on Restaurant Table',
      description: 'Clean, professional table tent with QR code'
    },
    {
      src: 'https://images.pexels.com/photos/5865303/pexels-photo-5865303.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Takeaway Box QR Code',
      description: 'QR codes on takeaway packaging for easy access'
    },
    {
      src: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Wall Menu with QR',
      description: 'Large format wall menu with prominently displayed QR code'
    },
    {
      src: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Mobile Scanning',
      description: 'Customers easily scanning QR codes with their phones'
    },
    {
      src: 'https://images.pexels.com/photos/5865303/pexels-photo-5865303.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Drive-Through Display',
      description: 'QR codes integrated into drive-through displays'
    },
    {
      src: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Window Display',
      description: 'Storefront window with QR code for browsing menu before entering'
    }
  ];

  const benefits = [
    {
      icon: QrCode,
      title: 'Instant Access',
      description: 'Customers scan and view your menu in seconds'
    },
    {
      icon: Smartphone,
      title: 'No App Required',
      description: 'Works with any smartphone camera or QR scanner'
    },
    {
      icon: MapPin,
      title: 'Versatile Placement',
      description: 'Use on tables, walls, windows, or takeaway packaging'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 to-white" id="qr-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            QR Menu Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our QR codes work in real restaurant environments. From table tents to takeaway boxes, 
            we provide versatile solutions for every need.
          </p>
        </motion.div>

        {/* Benefits Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <benefit.icon className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
              
              {/* QR Code Overlay */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg p-2 opacity-90 shadow-md">
                <div className="w-full h-full bg-gray-900 rounded grid grid-cols-4 gap-0.5">
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`${Math.random() > 0.3 ? 'bg-white' : 'bg-gray-900'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Boost */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Implementation</h3>
            <p className="text-gray-600 mb-6">
              Every QR code we create is thoroughly tested across different devices and lighting conditions 
              to ensure perfect scanning every time. We provide high-resolution files suitable for any print size.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>✓ High Resolution</span>
              <span>✓ Print Ready</span>
              <span>✓ All Formats</span>
              <span>✓ Tested & Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRGallery;