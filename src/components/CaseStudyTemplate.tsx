import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Building, Star, Clock, TrendingUp, Users } from 'lucide-react';
import { CaseStudy } from '../utils/seo';
import { schemaGenerators } from '../utils/schemaGenerators';

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
  className?: string;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ caseStudy, className = "" }) => {
  const {
    businessName,
    businessType,
    location,
    menuUrl,
    beforeImage,
    afterImage,
    results,
    testimonial,
    implementation
  } = caseStudy;

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-br from-forest-50 to-sage-50 p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{businessName}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                <span>{businessType}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-forest-600 text-white text-sm font-medium rounded-lg hover:bg-forest-700 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live Menu
          </a>
        </div>
      </div>

      {/* Before/After Images */}
      {(beforeImage || afterImage) && (
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Transformation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeImage && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Before</p>
                <img
                  src={beforeImage}
                  alt={`${businessName} before QR menu`}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            {afterImage && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">After</p>
                <img
                  src={afterImage}
                  alt={`${businessName} after QR menu`}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl font-bold text-forest-600 mb-1">
                {result.value}
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                {result.metric}
              </div>
              <div className="text-xs text-gray-600">
                {result.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Details */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-2 text-forest-600" />
              <span className="font-medium text-gray-900">Timeline</span>
            </div>
            <p className="text-gray-600 mb-4">{implementation.timeline}</p>
            
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Features Implemented</h5>
              <ul className="space-y-1">
                {implementation.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-forest-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-900 mb-2">Challenges Overcome</h5>
            <ul className="space-y-1">
              {implementation.challenges.map((challenge, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {testimonial && (
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Client Testimonial</h4>
          <div className="bg-gradient-to-br from-forest-50 to-sage-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 italic">
              "{testimonial.text}"
            </blockquote>
            <div className="text-sm">
              <div className="font-medium text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600">{testimonial.position}</div>
            </div>
          </div>
        </div>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGenerators.localBusinessCaseStudy(caseStudy))
        }}
      />
    </div>
  );
};

export default CaseStudyTemplate;