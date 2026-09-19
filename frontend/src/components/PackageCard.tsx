import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info, PawPrint, Bird, TreePalm, Leaf, Mountain, ArrowRight, Calendar } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

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
    slug?: string;
    category?: string;
    durationDays?: number;
    wildlife?: string[];
  };
}

const PackageCard: React.FC<PackageProps> = ({ packageData }) => {
  const { formatPrice } = useCurrency();
  const { openBookingModal } = useCustomSafariModal();

  // Map wildlife strings to icons
  const getWildlifeIcon = (animal: string) => {
    const a = animal.toLowerCase();
    if (a.includes('lion') || a.includes('leopard')) return <PawPrint className="w-4 h-4" />;
    if (a.includes('bird')) return <Bird className="w-4 h-4" />;
    if (a.includes('gorilla') || a.includes('chimpanzee')) return <TreePalm className="w-4 h-4" />;
    if (a.includes('rhino') || a.includes('elephant')) return <Mountain className="w-4 h-4" />;
    return <Leaf className="w-4 h-4" />;
  };

  const displayPrice = formatPrice(packageData.price);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group bg-brand-dark/95 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full text-left font-sans border border-white/10 hover:border-brand-green/40 shadow-xl"
    >
      {/* 1. Image Header */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={packageData.image}
          alt={packageData.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        {packageData.category && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">
              {packageData.category}
            </span>
          </div>
        )}

        {packageData.durationDays && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-brand-green/90 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Info className="w-3 h-3" />
            {packageData.durationDays} Days
          </div>
        )}
      </div>

      {/* 2. Content */}
      <div className="flex flex-col text-left p-6 flex-grow">
        
        {/* Price Section */}
        {(packageData.price || packageData.per) && (
          <div className="mb-3 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">Starting From</span>
              <p className="text-brand-green text-3xl font-serif font-bold">
                {displayPrice}
                <span className="text-gray-400 font-sans text-xs font-normal ml-1">/ {packageData.per || 'person'}</span>
              </p>
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-white text-lg font-serif font-bold tracking-wide mb-2 leading-snug group-hover:text-brand-green transition-colors">
          {packageData.title}
        </h3>
        
        {/* Destination Section */}
        {packageData.destination && (
          <p className="text-gray-400 text-xs mb-4">
            <span className="font-bold text-gray-300">Destination:</span> {packageData.destination}
          </p>
        )}

        {/* SAFARI HIGHLIGHTS SECTION */}
        {packageData.highlights && packageData.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-white text-xs font-bold mb-2 uppercase tracking-wider text-brand-green">
              Highlights:
            </h4>
            <ul className="space-y-1.5 ml-1">
              {packageData.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 line-clamp-1">
                  <span className="text-brand-green mt-1.5 w-1.5 h-1.5 bg-brand-green rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* WILDLIFE ICONS SECTION */}
        {packageData.wildlife && packageData.wildlife.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {packageData.wildlife.slice(0, 4).map((animal, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                <div className="text-brand-green">{getWildlifeIcon(animal)}</div>
                <span className="text-[10px] text-gray-300 uppercase tracking-tight">{animal}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex-grow" />

        {/* Action Buttons: View Details & Quick Quote */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          {packageData.slug ? (
            <Link 
              to={`/package/${packageData.slug}`}
              className="text-white font-bold text-xs tracking-widest uppercase hover:text-brand-green transition-colors flex items-center gap-1"
            >
              Itinerary <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
            </Link>
          ) : (
            <Link 
              to="/packages"
              className="text-white font-bold text-xs tracking-widest uppercase hover:text-brand-green transition-colors"
            >
              View Safari &rarr;
            </Link>
          )}

          <button
            type="button"
            onClick={() => openBookingModal({
              title: packageData.title,
              price: packageData.price,
              duration: packageData.durationDays ? `${packageData.durationDays} Days` : undefined,
              image: packageData.image,
              destination: packageData.destination,
              category: packageData.category,
              slug: packageData.slug
            })}
            className="px-4 py-2 bg-brand-green text-white font-bold text-[11px] uppercase tracking-wider rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-md flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Safari
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
