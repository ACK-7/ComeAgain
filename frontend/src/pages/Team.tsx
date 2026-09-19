import React from 'react';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { motion, type Variants } from 'framer-motion';
import SEO from '../components/SEO';

const Team: React.FC = () => {
  const { team } = siteData.aboutPage;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Meet Our Team | Come Again Tours & Travels"
        description="Meet the passionate team behind Come Again Tours & Travels. Our experts are dedicated to crafting unforgettable safari experiences."
        url="https://comeagaintoursandtravels.com/team"
      />
      <main>
        {/* 1. Hero Section — 90vh + Ken Burns */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={team.hero.image}
              alt="Team Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          {/* Content pinned to bottom-right */}
          <div className="relative z-10 w-full px-6 pb-16 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Our People
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              The Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="text-white/80 text-xl md:text-2xl max-w-md mt-4 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              {team.hero.description}
            </motion.p>
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

        {/* 2. Team Grid */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Subtle animated mesh backdrop */}
          <div className="absolute inset-0 z-0 bg-[#f8fcf8]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#ff1493_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#00ffff_0%,transparent_50%),radial-gradient(circle_at_50%_80%,#ffff00_0%,transparent_50%),radial-gradient(circle_at_10%_90%,#32cd32_0%,transparent_50%)] opacity-20 blur-[100px] animate-pulse" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 text-center"
            >
              <span className="text-brand-green font-bold text-sm uppercase tracking-[0.3em] block mb-4">
                Meet the crew
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-dark leading-tight">
                The Faces Behind <br />
                <span className="text-brand-green italic">Your Safari</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-16 h-[2px] bg-brand-green mx-auto mt-8 origin-center"
              />
            </motion.div>

            {/* Member cards — staggered wave */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {team.members.map((member, idx) => {
                // Determine if this member is a safari guide with a dedicated story page
                let guideSlug: string | null = null;
                const lowerName = member.name.toLowerCase();
                if (lowerName.includes('issa') || lowerName.includes('ssesanga')) {
                  guideSlug = 'issa-ssesanga';
                } else if (lowerName.includes('ramathan') || lowerName.includes('muwonge')) {
                  guideSlug = 'ramathan-muwonge';
                } else if (lowerName.includes('patrick') || lowerName.includes('kikonyogo')) {
                  guideSlug = 'patrick-kikonyogo';
                }

                const CardWrapper = guideSlug ? 'a' : 'div';
                const cardProps = guideSlug ? { href: `/guides/${guideSlug}` } : {};

                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Photo */}
                    <CardWrapper
                      {...cardProps}
                      className="w-full max-w-[280px] aspect-[3/4] overflow-hidden mb-4 rounded-2xl shadow-lg relative bg-gray-100 block"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          objectPosition: lowerName.includes('ramathan') ? 'center 38%' : 'center'
                        }}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                      />
                      {/* Subtle green border reveal on hover */}
                      <div className="absolute inset-0 border-2 border-brand-green/0 group-hover:border-brand-green/40 transition-all duration-500 rounded-2xl" />

                      {guideSlug && (
                        <div className="absolute bottom-3 left-3 right-3 bg-brand-green/90 backdrop-blur-md text-white py-1.5 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                          <span>View Story & Bush Tales &rarr;</span>
                        </div>
                      )}
                    </CardWrapper>

                    {/* Name */}
                    {guideSlug ? (
                      <a href={`/guides/${guideSlug}`} className="hover:text-brand-green transition-colors">
                        <h3 className="text-lg md:text-xl font-serif font-black text-brand-dark mb-1 tracking-tight group-hover:text-brand-green transition-colors duration-300">
                          {member.name}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-lg md:text-xl font-serif font-black text-brand-dark mb-1 tracking-tight group-hover:text-brand-green transition-colors duration-300">
                        {member.name}
                      </h3>
                    )}

                    {/* Animated underline */}
                    <div className="w-10 h-[2px] bg-brand-green mx-auto my-2 origin-center" />

                    {/* Role */}
                    <p className="text-brand-dark/70 font-bold text-xs uppercase tracking-widest">
                      {member.position}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 3. Final CTA Section — fixed background */}
        <section
          className="relative px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-20-at-20.30.59.jpeg)` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-5xl mx-auto text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-3xl md:text-4xl font-serif text-brand-green mb-10 leading-[1.1]"
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
              Planning your next adventure? Let Come Again Tours and Travels create a perfect safari experience for you.
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
                className="px-10 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
              >
                Let's Work Together
              </motion.a>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Or give us a call:</span>
                <a href="tel:+256774243747" className="text-brand-green text-3xl font-serif font-bold hover:text-brand-accent transition-colors">
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

export default Team;
