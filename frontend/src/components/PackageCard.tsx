import React from 'react';
import { motion } from 'framer-motion';

interface PackageProps {
  packageData: {
    title: string;
    description?: string;
    destination?: string;
    bestFor?: string;
    highlights?: string[];
    image: string;
    price?: string;
    per?: string;
  };
}

const PackageCard: React.FC<PackageProps> = ({ packageData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-brand-dark overflow-hidden transition-all duration-300 flex flex-col h-full text-left font-sans"
    >
      {/* 1. Image Header - 4:3 Aspect Ratio suggested by site */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={packageData.image} 
          alt={packageData.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      {/* 2. Content */}
      <div className="flex flex-col text-left py-6 px-2 flex-grow">
        
        {/* Price Section */}
        {(packageData.price || packageData.per) && (
          <div className="mb-4">
            <p className="text-brand-green text-3xl font-serif font-bold">
              {packageData.price} 
              <span className="text-white font-sans text-sm font-normal ml-2">/ {packageData.per}</span>
            </p>
            <div className="h-[1px] bg-brand-green/80 w-3/4 mt-2" />
          </div>
        )}

        {/* Title in Yellow/Gold */}
        <h3 className="text-brand-accent text-sm font-bold tracking-wide mb-3 leading-snug pr-4">
          {packageData.title}
        </h3>
        
        {/* Destination Section */}
        {packageData.destination && (
          <p className="text-white text-[13px] mb-4">
            <span className="font-bold">Destination:</span> {packageData.destination}
          </p>
        )}

        {/* SAFARI HIGHLIGHTS SECTION */}
        {packageData.highlights && packageData.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-white text-[13px] font-bold mb-2">
              Highlights:
            </h4>
            <ul className="space-y-2 ml-4">
              {packageData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[13px] text-white">
                  <span className="text-white mt-1.5 w-1 h-1 bg-white rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* BEST FOR SECTION */}
        {packageData.bestFor && (
          <div className="mb-6">
            <p className="text-white text-[13px]">
               <span className="font-bold">Best For:</span> {packageData.bestFor}
            </p>
          </div>
        )}

        <div className="flex-grow" />

        {/* ACTION LINK */}
        <div className="mt-auto">
          <a 
            href={`/contact?package=${encodeURIComponent(packageData.title)}`}
            className="inline-block text-brand-green font-bold text-xs tracking-widest uppercase hover:text-white transition-colors"
          >
            BOOK WITH US &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
