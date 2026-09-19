import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';

type Variant = 'footer' | 'compact' | 'inline';

interface RegulatoryPartnersProps {
  variant?: Variant;
  showNote?: boolean;
  className?: string;
}

type Partner = (typeof siteData.regulatoryPartners.partners)[0];

/** Show carousel controls when more logos than fit in one view */
const CAROUSEL_THRESHOLD = 4;
const LOGOS_PER_VIEW = 3;

const PartnerLogo: React.FC<{
  partner: Partner;
  logoClass: string;
  showLabel?: boolean;
}> = ({ partner, logoClass, showLabel = false }) => (
  <a
    href={partner.url}
    target="_blank"
    rel="noopener noreferrer"
    title={partner.name}
    className="group flex flex-col items-center justify-center shrink-0"
  >
    <img
      src={partner.logo}
      alt={`${partner.name} logo`}
      className={`${logoClass} w-auto object-contain transition-opacity group-hover:opacity-80`}
    />
    {showLabel && (
      <span className="mt-2 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-green text-center max-w-[120px]">
        {partner.shortName}
      </span>
    )}
  </a>
);

const PartnerCarousel: React.FC<{
  partners: Partner[];
  logoClass: string;
  showLabel?: boolean;
}> = ({ partners, logoClass, showLabel }) => {
  const useCarousel = partners.length >= CAROUSEL_THRESHOLD;
  const [index, setIndex] = useState(0);

  const maxIndex = useCarousel
    ? Math.max(0, Math.ceil(partners.length / LOGOS_PER_VIEW) - 1)
    : 0;

  const visible = useCarousel
    ? partners.slice(index * LOGOS_PER_VIEW, index * LOGOS_PER_VIEW + LOGOS_PER_VIEW)
    : partners;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => Math.max(0, Math.min(maxIndex, i + dir)));
    },
    [maxIndex]
  );

  useEffect(() => {
    if (!useCarousel) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [useCarousel, maxIndex]);

  return (
    <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full max-w-4xl mx-auto">
      {useCarousel && (
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous partners"
          className="shrink-0 p-2 text-brand-green hover:text-brand-dark disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
        </button>
      )}

      <div className="flex-1 min-w-0 overflow-hidden">
        {useCarousel ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-center gap-12 md:gap-20 lg:gap-28 px-2"
            >
              {visible.map((p) => (
                <PartnerLogo key={p.id} partner={p} logoClass={logoClass} showLabel={showLabel} />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-24 px-2 flex-wrap">
            {partners.map((p) => (
              <PartnerLogo key={p.id} partner={p} logoClass={logoClass} showLabel={showLabel} />
            ))}
          </div>
        )}
      </div>

      {useCarousel && (
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index >= maxIndex}
          aria-label="Next partners"
          className="shrink-0 p-1.5 text-brand-green hover:text-brand-dark disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};

const RegulatoryPartners: React.FC<RegulatoryPartnersProps> = ({
  variant = 'footer',
  showNote = variant !== 'footer',
  className = '',
}) => {
  const { heading, note, partners } = siteData.regulatoryPartners;
  const logoClass =
    variant === 'footer'
      ? 'h-9 sm:h-11 md:h-12 max-w-[110px] sm:max-w-[140px]'
      : variant === 'compact'
      ? 'h-14 md:h-16 max-w-[160px]'
      : 'h-10 max-w-[120px]';

  if (variant === 'footer') {
    return (
      <section
        className={`w-full bg-white border-y border-gray-200/80 py-4 sm:py-5 px-4 ${className}`}
        aria-label="Industry and regulatory partners"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center text-gray-500 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase mb-2.5 sm:mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {heading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="w-full flex justify-center"
          >
            <PartnerCarousel partners={partners} logoClass={logoClass} />
          </motion.div>

          {note && showNote && (
            <p className="text-center text-gray-400 text-xs max-w-xl mx-auto mt-4 leading-relaxed">
              {note}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={className}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-6 text-center">
          {heading}
        </p>
        <PartnerCarousel partners={partners} logoClass={logoClass} showLabel />
        {showNote && note && (
          <p className="text-gray-500 text-sm mt-8 leading-relaxed max-w-2xl mx-auto text-center">{note}</p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-5">{heading}</p>
      <PartnerCarousel partners={partners} logoClass={logoClass} showLabel />
      {showNote && note && <p className="text-gray-400 text-sm mt-6 leading-relaxed">{note}</p>}
    </div>
  );
};

export default RegulatoryPartners;

export const UWA_RELEVANT_CATEGORIES = new Set([
  'Wildlife Safaris',
  'Gorilla & Primate',
  'Multi-Park Circuits',
  'Fly-In & Premium',
  'Birding Safaris',
  'East Africa & Beyond',
]);

export function isUwaRelevantPackage(category?: string): boolean {
  return category ? UWA_RELEVANT_CATEGORIES.has(category) : false;
}
