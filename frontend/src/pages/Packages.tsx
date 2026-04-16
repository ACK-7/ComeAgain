import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackageCard from '../components/PackageCard';
import { siteData } from '../data/siteData';
import { motion, type Variants } from 'framer-motion';

const Packages: React.FC = () => {
  const { hero, sections } = siteData.packagesPage;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero Section — 90vh + Ken Burns */}
        <section className="relative h-[90vh] flex items-end overflow-hidden">
          {/* Ken Burns background */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </motion.div>

          {/* Content pinned to bottom */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-end pb-16">
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className="text-6xl md:text-9xl font-serif text-white leading-[0.9] drop-shadow-2xl"
              >
                Our <br /> Packages
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="bg-black/40 backdrop-blur-md p-10 border-l-4 border-brand-green"
            >
              <p className="text-lg md:text-xl text-white font-serif italic leading-relaxed">
                {hero.description}
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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

        {/* 2. Package Sections by Region */}
        {sections.map((section, sectionIdx) => (
          <section key={section.title} className="py-24 px-4 bg-[#0c1106]">
            <div className="max-w-7xl mx-auto">

              {/* Section heading */}
              <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Section number accent */}
                  <span className="text-brand-green/20 font-serif text-6xl font-black leading-none block select-none mb-1">
                    {String(sectionIdx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif text-brand-green leading-tight">
                    {section.title}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="hidden lg:block text-right"
                >
                  <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-1">Explore</p>
                  <p className="text-gray-400 text-sm">East Africa Safaris</p>
                </motion.div>
              </div>

              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="w-full h-[1px] bg-brand-green/20 mb-20 -mt-20 origin-left hidden"
              />

              {/* Package cards — staggered wave */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24"
              >
                {section.packages.map((pkg, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <PackageCard packageData={pkg as any} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* 3. Scenic Footer CTA — fixed background */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg)` }}
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
              Experience the wilderness of East Africa like never before. From the mists of Bwindi to the savannas of Murchison Falls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
              >
                Plan Your Safari
              </motion.a>
              <div className="hidden md:block w-[1px] h-12 bg-white/30" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Call us:</span>
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

      <Footer />
    </div>
  );
};

export default Packages;
