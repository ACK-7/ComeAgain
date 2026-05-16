import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info, PawPrint, Bird, TreePalm, Leaf, Mountain } from 'lucide-react';
import { formatPackagePrice } from '../data/packageCategories';

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
  // Map wildlife strings to icons
  const getWildlifeIcon = (animal: string) => {
    const a = animal.toLowerCase();
    if (a.includes('lion') || a.includes('leopard')) return <PawPrint className="w-4 h-4" />;
    if (a.includes('bird')) return <Bird className="w-4 h-4" />;
    if (a.includes('gorilla') || a.includes('chimpanzee')) return <TreePalm className="w-4 h-4" />;
    if (a.includes('rhino') || a.includes('elephant')) return <Mountain className="w-4 h-4" />;
    return <Leaf className="w-4 h-4" />;
  };
  const displayPrice = formatPackagePrice(packageData.price);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group bg-brand-dark overflow-hidden transition-shadow duration-300 flex flex-col h-full text-left font-sans border border-white/5 hover:border-brand-green/20"
    >
      {/* 1. Image Header - 4:3 Aspect Ratio suggested by site */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={packageData.image}
          alt={packageData.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        

        {/* Category Badge */}
        {packageData.category && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">
              {packageData.category}
            </span>
          </div>
        )}
      </div>

      {/* 2. Content */}
      <div className="flex flex-col text-left py-6 px-2 flex-grow">
        
        {/* Price Section */}
        {(packageData.price || packageData.per) && (
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-brand-green text-3xl font-serif font-bold">
                {displayPrice}
                <span className="text-white font-sans text-sm font-normal ml-2">/ {packageData.per}</span>
              </p>
              <div className="h-[1px] bg-brand-green/80 w-24 mt-2" />
            </div>
            {packageData.durationDays && (
              <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-bold uppercase tracking-tighter mb-1">
                <Info className="w-3 h-3" />
                {packageData.durationDays} Days
              </div>
            )}
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
              {packageData.highlights.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[13px] text-white line-clamp-2">
                  <span className="text-white mt-1.5 w-1 h-1 bg-white rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* WILDLIFE ICONS SECTION */}
        {packageData.wildlife && packageData.wildlife.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-4">
            {packageData.wildlife.slice(0, 4).map((animal, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 group/icon">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-green transition-colors group-hover/icon:bg-brand-green group-hover/icon:text-white">
                  {getWildlifeIcon(animal)}
                </div>
                <span className="text-[9px] text-white/40 uppercase tracking-tighter">{animal}</span>
              </div>
            ))}
          </div>
        )}

        {/* BEST FOR SECTION */}
        {packageData.bestFor && (
          <div className="mb-6">
            <p className="text-white/40 text-[11px] italic leading-relaxed">
               <span className="font-bold text-white/60 not-italic uppercase tracking-widest text-[9px] mr-2">Ideal for:</span> 
               {packageData.bestFor}
            </p>
          </div>
        )}

        <div className="flex-grow" />

        {/* ACTION LINK */}
        <div className="mt-auto flex flex-col gap-3">
          {packageData.slug ? (
            <Link 
              to={`/package/${packageData.slug}`}
              className="inline-block text-brand-green font-bold text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              VIEW DETAILS &rarr;
            </Link>
          ) : (
            <a 
              href={`/contact?package=${encodeURIComponent(packageData.title)}`}
              className="inline-block text-brand-green font-bold text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              BOOK WITH US &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
