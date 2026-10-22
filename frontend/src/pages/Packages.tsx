import { getApiBaseUrl } from '../services/apiClient';
import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import PackageCard from '../components/PackageCard';
import TrustBadges from '../components/TrustBadges';
import { siteData } from '../data/siteData';
import {
  PACKAGE_FILTER_THEMES,
  DURATION_FILTERS,
  matchesCategoryFilter,
  matchesDurationFilter,
  type PackageFilterTheme,
  type DurationFilterValue,
} from '../data/packageCategories';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

function matchesDestinationFilter(pkg: { details?: { location?: string }; title?: string; destination?: string }, dest: string): boolean {
  if (!dest || dest === 'All' || dest === 'all') return true;
  const loc = (pkg.destination || pkg.details?.location || '').toLowerCase();
  const title = (pkg.title || '').toLowerCase();
  const d = dest.toLowerCase();

  if (d === 'uganda') {
    const isForeign = loc.includes('rwanda') || loc.includes('kenya') || loc.includes('tanzania') || loc.includes('dubai') ||
                      title.includes('rwanda') || title.includes('kenya') || title.includes('tanzania') || title.includes('dubai');
    return !isForeign || loc.includes('uganda') || loc.includes('murchison') || loc.includes('bwindi') || loc.includes('queen elizabeth') || loc.includes('kibale') || loc.includes('kidepo') || loc.includes('jinja') || loc.includes('mburo');
  }
  if (d === 'rwanda') {
    return loc.includes('rwanda') || title.includes('rwanda') || loc.includes('volcanoes') || loc.includes('kigali') || loc.includes('akagera');
  }
  if (d === 'kenya') {
    return loc.includes('kenya') || title.includes('kenya') || loc.includes('masai mara') || loc.includes('amboseli') || loc.includes('nairobi');
  }
  if (d === 'tanzania') {
    return loc.includes('tanzania') || title.includes('tanzania') || loc.includes('serengeti') || loc.includes('ngorongoro') || loc.includes('zanzibar');
  }

  return loc.includes(d) || title.includes(d);
}

const Packages: React.FC = () => {
  const { hero } = siteData.packagesPage;
  const [searchParams, setSearchParams] = useSearchParams();

  // Published database content is authoritative.
  const [packagesList, setPackagesList] = useState<import('../admin/types/adminTypes').SafariPackageItem[]>([]);

  const [activeCategory, setActiveCategory] = useState<PackageFilterTheme>('All');
  const [activeDuration, setActiveDuration] = useState<DurationFilterValue>('All');
  const [activeDestination, setActiveDestination] = useState<string>('All');
  const resultsRef = useRef<HTMLDivElement>(null);
  const skipInitialScroll = useRef(true);

  // Fetch live published packages from backend database
  useEffect(() => {
    const fetchLivePackages = async () => {
      try {
        const baseUrl = getApiBaseUrl();

        const res = await fetch(`${baseUrl}/packages`, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(6000),
        });

        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setPackagesList(json.data);
          }
        }
      } catch { /* No stale static offers when the API is unavailable. */ }
    };

    fetchLivePackages();
  }, []);

  // Sync URL search parameters (from Hero quick-search bar or direct links)
  useEffect(() => {
    const destParam = searchParams.get('destination');
    const styleParam = searchParams.get('style');
    const durParam = searchParams.get('duration');

    if (destParam) {
      setActiveDestination(destParam);
    }
    if (styleParam) {
      if (styleParam === 'gorilla') setActiveCategory('Gorilla & Primate');
      else if (styleParam === 'big5') setActiveCategory('Wildlife Safaris');
      else if (styleParam === 'flyin') setActiveCategory('Fly-In & Premium');
      else if (styleParam === 'birding') setActiveCategory('Birding Safaris');
      else if (PACKAGE_FILTER_THEMES.includes(styleParam as PackageFilterTheme)) {
        setActiveCategory(styleParam as PackageFilterTheme);
      }
    }
    if (durParam) {
      if (durParam === 'short') setActiveDuration('short');
      else if (durParam === 'medium') setActiveDuration('medium');
      else if (durParam === 'grand' || durParam === 'ultimate' || durParam === 'long') setActiveDuration('long');
    }
  }, [searchParams]);

  const filteredSections = useMemo(() => {
    const matched = packagesList.filter(
      (pkg) =>
        matchesCategoryFilter(pkg, activeCategory) &&
        matchesDurationFilter(pkg, activeDuration) &&
        matchesDestinationFilter(pkg, activeDestination)
    );

    return [
      {
        title: 'Safari Packages',
        packages: matched,
      },
    ].filter((section) => section.packages.length > 0);
  }, [packagesList, activeCategory, activeDuration, activeDestination]);

  const totalResults = useMemo(
    () => filteredSections.reduce((sum, s) => sum + s.packages.length, 0),
    [filteredSections]
  );

  const scrollToResults = useCallback(() => {
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }
    scrollToResults();
  }, [activeCategory, activeDuration, activeDestination, scrollToResults]);

  const activeThemeLabel =
    DURATION_FILTERS.find((d) => d.value === activeDuration)?.label ?? 'Any length';

  const handleClearFilters = () => {
    setActiveCategory('All');
    setActiveDuration('All');
    setActiveDestination('All');
    setSearchParams({});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden"
    >
      <SEO
        title="Our Safari Packages | Come Again Tours & Travels"
        description="Explore our bespoke Uganda safari packages including Gorilla Trekking, Wildlife Safaris, and Cultural Tours designed for every type of traveler."
        url="https://comeagaintoursandtravels.com/packages"
      />
      <main>
        {/* Hero */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={hero.image}
              alt="Our Packages Hero"
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
            />
          </motion.div>

          <div className="relative z-10 w-full px-6 pb-16 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Tailored for You
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              Our Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="text-white/80 text-xl md:text-2xl max-w-md mt-4 leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              {hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[2px] h-8 bg-gradient-to-b from-brand-green to-transparent"
            />
          </motion.div>
        </section>

        {/* Filter bar — offset below fixed navbar (pt-24 = 6rem) */}
        <section
          className="sticky top-24 z-40 bg-[#0c1106]/95 border-y border-white/5 py-6 px-4 backdrop-blur-md"
          aria-label="Filter safari packages"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-7xl mx-auto flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left"
            >
              <p className="text-white/50 text-xs uppercase tracking-widest">
                {totalResults === 0
                  ? 'No safaris match your filters'
                  : `Showing ${totalResults} safari${totalResults === 1 ? '' : 's'}`}
                {activeDestination !== 'All' && (
                  <span className="text-amber-400 capitalize"> · {activeDestination}</span>
                )}
                {activeCategory !== 'All' && (
                  <span className="text-brand-green"> · {activeCategory}</span>
                )}
                {activeDuration !== 'All' && (
                  <span className="text-white/40"> · {activeThemeLabel}</span>
                )}
              </p>
              {(activeCategory !== 'All' || activeDuration !== 'All' || activeDestination !== 'All') && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-brand-green text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors self-center sm:self-auto"
                >
                  Clear filters
                </button>
              )}
            </motion.div>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="flex flex-col gap-3 min-w-0"
              >
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                  Safari type
                </span>
                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
                  role="group"
                  aria-label="Safari type"
                >
                  {PACKAGE_FILTER_THEMES.map((cat) => (
                    <motion.button
                      key={cat}
                      type="button"
                      aria-pressed={activeCategory === cat}
                      onClick={() => setActiveCategory(cat)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                        activeCategory === cat
                          ? 'bg-brand-green border-brand-green text-white shadow-lg shadow-brand-green/20'
                          : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {cat === 'All' ? 'All' : cat}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.28 }}
                className="flex flex-col gap-3 shrink-0"
              >
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center lg:text-right">
                  Trip length
                </span>
                <div
                  className="flex flex-wrap sm:flex-nowrap bg-white/5 p-1 rounded-xl border border-white/10 gap-1 justify-center lg:justify-end"
                  role="group"
                  aria-label="Trip length"
                >
                  {DURATION_FILTERS.map((dur) => (
                    <motion.button
                      key={dur.value}
                      type="button"
                      aria-pressed={activeDuration === dur.value}
                      onClick={() => setActiveDuration(dur.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-3 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                        activeDuration === dur.value
                          ? 'bg-brand-green text-white shadow-md shadow-brand-green/25'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {dur.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Results */}
        <motion.div
          ref={resultsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative min-h-[400px] scroll-mt-28"
        >
          {filteredSections.length > 0 ? (
            filteredSections.map((section, sectionIdx) => (
              <section
                key={section.title}
                className="px-4 bg-[#0c1106] py-16 overflow-hidden"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col"
                    >
                      <span className="text-brand-green/10 font-serif text-5xl font-black leading-none block select-none">
                        {String(sectionIdx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-serif text-brand-green leading-tight">
                        {section.title}
                      </h2>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    <AnimatePresence mode="popLayout" initial={false}>
                      {section.packages.map((pkg, idx) => (
                        <motion.div
                          layout
                          key={pkg.slug || `${section.title}-${idx}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                            opacity: { duration: 0.2 },
                          }}
                        >
                          <PackageCard packageData={pkg} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-40 text-center px-4"
            >
              <h3 className="text-4xl font-serif text-white/20 mb-4">No match found</h3>
              <p className="text-white/40 max-w-md mx-auto">
                Try a different safari type or trip length, or browse all packages.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-8 text-brand-green border-b border-brand-green/30 pb-1 hover:text-white hover:border-white transition-all uppercase text-xs font-bold tracking-widest"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.webp)`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-5xl mx-auto text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-8xl font-serif text-brand-green mb-10 leading-[1.1]"
            >
              Taking you anywhere you can imagine.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-xl md:text-2xl font-serif max-w-4xl mb-16 leading-relaxed"
            >
              Experience the wilderness of East Africa like never before. From the mists of Bwindi to
              the savannas of Murchison Falls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
                >
                  Plan Your Safari
                </Link>
              </motion.div>
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="hidden md:block w-[1px] h-12 bg-white/30 origin-top"
              />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">
                  Call us:
                </span>
                <a
                  href="tel:+256774243747"
                  className="text-brand-green text-3xl font-serif font-bold hover:text-brand-accent transition-colors"
                >
                  +256 774 243 747
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <TrustBadges variant="dark" />
      <Footer />
    </motion.div>
  );
};

export default Packages;
